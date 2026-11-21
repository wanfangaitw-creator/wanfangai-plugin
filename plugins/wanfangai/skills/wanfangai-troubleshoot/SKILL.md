---
name: wanfangai-troubleshoot
description: "醫智匯平台（院內）的官方做法「常見狀況與排解」：在醫智匯做工具時卡住、出錯、跑不起來時先用這份：連不上平台、以前連得上卻突然找不到工具（重新連線；驗證完編輯器或終端機裡的 Codex 要重開）、AI 助手說連不上平台或 DNS 失敗（多半是沙箱，不是平台壞了）、外掛裝不起來（沒有 Git）、分級問診的網頁、發佈的表單沒跳出來（核准模式）、表單沒出現或斷線、建立失敗、安全檢查擋下、頁面空白或東西被擋、試用版別人看不到、發佈卡住、外掛舊了、換電腦、兩台電腦輪流做被擋（base_outdated）、共用電腦登出；怎麼試都不行時，請 AI 助手只檢查、不修改，寫一份診斷報告給平台團隊。每段寫看到什麼、為什麼、怎麼辦、還不行找誰。同仁看的版本在平台的「常見狀況」頁。只用在醫智匯的工具。"
---

# 常見狀況與排解（官方做法 `troubleshoot`）

全文在平台上，**每次用之前讀平台目前發佈的版本**（這裡不放副本：新版什麼時候給 AI 助手看，是平台管理員發佈時決定的）。
**有 `wanfangai_` 開頭的平台工具時，用 `wanfangai_read_skill`（name: `troubleshoot`）讀**，不要用下面的指令（有些電腦的沙箱不讓它連網路）；沒有平台工具才用：

```
node "<這個資料夾>/scripts/read.cjs" skill troubleshoot
```

這個指令要連網路，**直接用要求提高權限的方式執行**（Codex：`sandbox_permissions: "require_escalated"`；Claude Code：有開沙箱就用 `dangerouslyDisableSandbox: true`，沒開就照常執行），不要先在一般沙箱跑——Codex 的沙箱預設不能上網，會回 DNS、ENOTFOUND 這類錯誤，那**不是平台壞了，也不是要重新驗證**。
跟使用者說「如果畫面跳出詢問，請按允許，這個指令只讀平台上公開的做法；沒有跳出就不用做什麼」。

`<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份醫智匯 skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `wanfangai-connect` 那份的（2026-10-01 第 171 項）。
輸出的最後一行是「（skill troubleshoot 全文到此結束）」，沒看到就單獨再讀一次，不要憑記憶補。
讀到的內容照做；平台契約（`wanfangai-connect` 帶你讀）與這份衝突時，以契約為準。
