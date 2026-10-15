---
name: wanfangai-troubleshoot
description: "醫智匯平台（院內）的官方做法「常見狀況與排解」：在醫智匯做工具時卡住、出錯、跑不起來時先用這份：連不上平台、表單沒出現或斷線、建立失敗、安全檢查擋下、頁面空白或東西被擋、試用版別人看不到、發佈卡住、外掛舊了、換電腦、共用電腦登出。每段寫看到什麼、為什麼、怎麼辦、還不行找誰。同仁看的版本在平台的「常見狀況」頁。只用在醫智匯的工具。"
---

# 常見狀況與排解（官方做法 `troubleshoot`）

全文在平台上，**每次用之前讀平台目前發佈的版本**（這裡不放副本：新版什麼時候給 AI 助手看，是平台管理員發佈時決定的）。
**有 `wanfangai_` 開頭的平台工具時，用 `wanfangai_read_skill`（name: `troubleshoot`）讀**，不要用下面的指令（有些電腦的沙箱不讓它連網路）；沒有平台工具才用：

```
node "<這個資料夾>/scripts/read.cjs" skill troubleshoot
```

`<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份醫智匯 skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `wanfangai-connect` 那份的（2026-10-01 第 171 項）。
輸出的最後一行是「（skill troubleshoot 全文到此結束）」，沒看到就單獨再讀一次，不要憑記憶補。
讀到的內容照做；平台契約（`wanfangai-connect` 帶你讀）與這份衝突時，以契約為準。
