#!/usr/bin/env node
// 醫智匯：把專案資料夾打包成 .tar.gz，上傳到平台給的一次性網址（M48）。
//
//   node pack-upload.cjs <wanfangai_upload_url 給的網址> [專案資料夾，預設是目前的資料夾]
//
// 不打包：node_modules、.git（套件與 git 自己的資料，電腦上有就好）。
// 不上傳：.env、.env.*（通常放密碼與金鑰）——找到就停下來說，不偷偷略過。
// 只用 Node 內建的功能，沒有任何套件。上傳成功印出 upload_id，接著用 wanfangai_save_version 存版本。
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const MAX_BYTES = 50 * 1024 * 1024;
const SKIP_DIRS = new Set(['node_modules', '.git']);
const URL_OK =
  /^(https:\/\/[^/\s]+|http:\/\/(localhost|127\.0\.0\.1)(:\d+)?)\/api\/v1\/uploads\/[A-Za-z0-9_-]{20,64}$/;

function fail(message) {
  console.log(message);
  process.exit(1);
}

const [url, dirArg] = process.argv.slice(2);
if (!url || !URL_OK.test(url)) {
  fail('用法：node pack-upload.cjs <wanfangai_upload_url 給的網址> [專案資料夾]');
}
const root = path.resolve(dirArg || '.');
if (!fs.existsSync(path.join(root, 'app-manifest.yml'))) {
  fail(`${root} 裡沒有 app-manifest.yml：請在應用的專案資料夾裡執行（或把資料夾路徑放在網址後面）`);
}

/** Every file under root, as forward-slash paths relative to it. */
function walk(dir, rel, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(path.join(dir, entry.name), relPath, out);
      continue;
    }
    if (!entry.isFile()) continue;
    if (entry.name === '.env' || entry.name.startsWith('.env.')) {
      fail(`${relPath} 通常放密碼與金鑰，不能上傳到平台。請把它移出專案資料夾再執行一次。`);
    }
    out.push(relPath);
  }
  return out;
}

function octal(n, width) {
  return `${n.toString(8).padStart(width - 1, '0')}\0`;
}

function header(name, size, type) {
  const h = Buffer.alloc(512);
  h.write(name, 0, 100, 'utf8');
  h.write(octal(0o644, 8), 100, 8);
  h.write(octal(0, 8), 108, 8);
  h.write(octal(0, 8), 116, 8);
  h.write(octal(size, 12), 124, 12);
  h.write(octal(Math.floor(Date.now() / 1000), 12), 136, 12);
  h.write('        ', 148, 8);
  h.write(type, 156, 1);
  h.write('ustar  \0', 257, 8);
  let sum = 0;
  for (const b of h) sum += b;
  h.write(`${sum.toString(8).padStart(6, '0')}\0 `, 148, 8);
  return h;
}

function pad(size) {
  return Buffer.alloc((512 - (size % 512)) % 512);
}

/** A file entry; a name longer than the header holds goes first as a GNU long-name entry. */
function entry(name, data) {
  const parts = [];
  if (Buffer.byteLength(name, 'utf8') > 99) {
    const long = Buffer.from(`${name}\0`, 'utf8');
    parts.push(header('././@LongLink', long.length, 'L'), long, pad(long.length));
  }
  parts.push(header(name, data.length, '0'), data, pad(data.length));
  return parts;
}

async function main() {
  const files = walk(root, '', []);
  if (files.length === 0) fail('資料夾裡沒有檔案');
  const parts = [];
  let raw = 0;
  for (const rel of files) {
    const data = fs.readFileSync(path.join(root, rel));
    raw += data.length;
    parts.push(...entry(rel, data));
  }
  parts.push(Buffer.alloc(1024));
  const gz = zlib.gzipSync(Buffer.concat(parts));
  if (gz.length > MAX_BYTES) {
    fail(
      `打包後 ${(gz.length / 1024 / 1024).toFixed(1)} MB，超過 50 MB：請確認沒有把影片、備份或套件資料夾放在專案裡`,
    );
  }
  console.log(
    `打包了 ${files.length} 個檔案（${(raw / 1024).toFixed(0)} KB，壓縮後 ${(gz.length / 1024).toFixed(0)} KB），上傳中…`,
  );
  let res;
  try {
    res = await fetch(url, {
      method: 'PUT',
      headers: { 'content-type': 'application/gzip' },
      body: gz,
    });
  } catch (err) {
    fail(
      `連不上平台（${err.cause?.code ?? err.message}）：這台電腦的沙箱可能擋了網路，請用要求提高權限的方式再執行一次`,
    );
  }
  const text = await res.text();
  let body = null;
  try {
    body = JSON.parse(text);
  } catch {}
  if (!res.ok || !body || !body.upload_id) {
    fail(`平台沒有收下（HTTP ${res.status}）：${body?.error?.message ?? text.slice(0, 200)}`);
  }
  console.log(`上傳完成：upload_id ${body.upload_id}（平台讀到 ${body.files} 個檔案）`);
  console.log('接著呼叫 wanfangai_save_version，帶 slug 與這個 upload_id 存版本。');
}

main();
