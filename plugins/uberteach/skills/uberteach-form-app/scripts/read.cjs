#!/usr/bin/env node
// Reads the live platform rules one piece at a time, so an agent's tool output never has to hold
// the whole contract (about 100 KB; Codex keeps the start and end and drops the middle, which is
// where §3 lives — seen 2026-09-23). Bundled into every skill of the 醫智匯 plugin.
//
//   node read.cjs contract          the table of contents
//   node read.cjs contract 3        one chapter (3, 0.5, 4.55 …; "## 3." also works)
//   node read.cjs contract 0        chapter 0, and first a line saying whether this plugin is the latest
//   node read.cjs skills            the published official skills
//   node read.cjs skill form-app    one skill's full text (the published version)
//
// PLATFORM, PLUGIN_VERSION and LATEST_URL are filled in when the plugin is built
// (scripts/plugin-build.mjs).
'use strict';
const PLATFORM = 'https://platform.wanfangai.tw';
/** The version this copy was built as (plugin.json). */
const PLUGIN_VERSION = '2026.10.3';
/** plugin.json in the repo people install from; '' or unfilled = no check. */
const LATEST_URL = 'https://raw.githubusercontent.com/wanfangaitw-creator/wanfangai-plugin/main/plugins/uberteach/plugin.json';

const [what, arg] = process.argv.slice(2);

function fail(message) {
  console.log(message);
  process.exit(1);
}

async function get(path) {
  let res;
  try {
    res = await fetch(PLATFORM + path);
  } catch (err) {
    fail(`連不上平台（${PLATFORM}）：${err.cause?.code ?? err.message}。請讀契約第 0.5 章的做法。`);
  }
  const text = await res.text();
  if (!res.ok) fail(`平台回 ${res.status}：${text.slice(0, 300)}`);
  // Every platform response carries X-Docs-Version (the contract's); a skill also carries its own.
  return {
    text,
    docs: res.headers.get('x-docs-version'),
    skills: res.headers.get('x-skills-version'),
  };
}

/** "3", "3.", "## 3." -> "3"; a heading "## 4.55 應用的…" -> "4.55". */
const chapterOf = (s) =>
  s
    .replace(/^##\s*/, '')
    .split(/\s/)[0]
    .replace(/\.$/, '');

/**
 * Installed plugins never update themselves and the desktop app has no refresh button
 * (2026-09-30), so an old copy can stay for months. Chapter 0 is the first thing every connect
 * reads: say there whether a newer one is out. Advisory — a failed look never stops the read.
 * Versions are compared for equality only, like every version in this project.
 */
async function pluginNotice() {
  if (!LATEST_URL || LATEST_URL.startsWith('@@')) return;
  try {
    const res = await fetch(LATEST_URL, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const latest = (await res.json()).version;
    if (!latest) throw new Error('沒有 version');
    if (latest === PLUGIN_VERSION) {
      console.log(`（醫智匯 plugin ${PLUGIN_VERSION}，是最新版）`);
    } else {
      console.log(
        `（醫智匯 plugin 有新版：這台電腦裝的是 ${PLUGIN_VERSION}，最新是 ${latest}。` +
          '照 uberteach-connect「plugin 有新版時」那一段告訴使用者，不要中斷手上的事）',
      );
    }
  } catch (err) {
    console.log(
      `（查不到醫智匯 plugin 的最新版本：${err.cause?.code ?? err.message}；這次略過，不影響使用）`,
    );
  }
}

async function main() {
  if (what === 'contract') {
    if (arg && chapterOf(arg) === '0') await pluginNotice();
    const { text, docs } = await get('/llms.txt');
    console.log(`契約版本：${docs}（平台回應的 X-Docs-Version 與這個不同時，重讀要用的章節）`);
    if (!arg) {
      const toc = /<!-- toc:start -->([\s\S]*?)<!-- toc:end -->/.exec(text);
      process.stdout.write(toc ? toc[1] : text.split(/\n(?=## )/)[0]);
      return;
    }
    const want = chapterOf(arg);
    const section = text
      .split(/\n(?=## )/)
      .find((s) => s.startsWith('## ') && chapterOf(s) === want);
    if (!section) fail(`契約裡沒有第 ${want} 章。不加章號執行可以看目錄。`);
    // An end line the agent can look for: without it, a cut-off chapter looks like a short one.
    process.stdout.write(`${section.trimEnd()}\n\n（第 ${want} 章到此結束）\n`);
    return;
  }
  if (what === 'skills') {
    const list = JSON.parse((await get('/api/v1/skills')).text);
    if (!list.version) fail('平台還沒有發佈任何官方 skill。');
    console.log(`官方 skill 版本：${list.version}`);
    for (const s of list.skills) console.log(`- ${s.name}（${s.version}）${s.title}：${s.summary}`);
    return;
  }
  if (what === 'skill' && arg) {
    const { text, skills } = await get(`/api/v1/skills/${encodeURIComponent(arg)}`);
    console.log(`官方 skill 版本：${skills}`);
    process.stdout.write(`${text.trimEnd()}\n\n（skill ${arg} 全文到此結束）\n`);
    return;
  }
  fail('用法：read.cjs contract [章號] | skills | skill <名稱>');
}

main();
