#!/usr/bin/env node
// Reads the live platform rules one piece at a time, so an agent's tool output never has to hold
// the whole contract (about 100 KB; Codex keeps the start and end and drops the middle, which is
// where §3 lives — seen 2026-09-23). Bundled into every skill of the 醫智匯 plugin.
//
//   node read.cjs contract          the table of contents
//   node read.cjs contract 3        one chapter (3, 0.5, 4.55 …; "## 3." also works)
//   node read.cjs contract 0        chapter 0
//   node read.cjs skills            the published official skills
//   node read.cjs skill form-app    one skill's full text (the published version)
//
// PLATFORM is filled in when the plugin is built (scripts/plugin-build.mjs). Whether this plugin is
// out of date is the platform's answer now (wanfangai_status, M56), not a look at the repo here.
'use strict';
const PLATFORM = 'https://platform.wanfangai.tw';

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

async function main() {
  if (what === 'contract') {
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
