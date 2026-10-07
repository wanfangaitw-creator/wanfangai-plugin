---
name: uberteach-static-app
description: "醫智匯 官方做法「靜態單頁工具」：一個 index.html 搞定的小工具：查詢、計算、對照表、衛教內容。不存資料、不需要登入。"
---

# 靜態單頁工具（官方做法 `static-app`）

全文在平台上，**每次用之前讀平台目前發佈的版本**（這裡不放副本：新版什麼時候給 AI 助手看，是平台管理員發佈時決定的）：

```
node "<這個資料夾>/scripts/read.cjs" skill static-app
```

`<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/uberteach/uberteach/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/uberteach/uberteach/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份醫智匯 skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `uberteach-connect` 那份的（2026-10-01 第 171 項）。
輸出的最後一行是「（skill static-app 全文到此結束）」，沒看到就單獨再讀一次，不要憑記憶補。
讀到的內容照做；平台契約（`uberteach-connect` 帶你讀）與這份衝突時，以契約為準。
