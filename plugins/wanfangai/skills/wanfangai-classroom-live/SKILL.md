---
name: wanfangai-classroom-live
description: "醫智匯平台（院內）的官方做法「課堂即時問答（互動教學）」：像 Slido 的課堂互動：老師預先出題（單選、複選、簡答、評分），上課開一個場次，學生掃 QR code 加入、跟著老師換題限時作答，老師即時看作答分布、決定公布或不公布答案，課後看每題答對率與每位學生的結果、下載 CSV。同一份題目可以用在不同班級，每班的紀錄分開。實習生用個人 Gmail 也能加入（平台要先開放）。只用在醫智匯的工具。"
---

# 課堂即時問答（互動教學）（官方做法 `classroom-live`）

全文在平台上，**每次用之前讀平台目前發佈的版本**（這裡不放副本：新版什麼時候給 AI 助手看，是平台管理員發佈時決定的）。
**有 `wanfangai_` 開頭的平台工具時，用 `wanfangai_read_skill`（name: `classroom-live`）讀**，不要用下面的指令（有些電腦的沙箱不讓它連網路）；沒有平台工具才用：

```
node "<這個資料夾>/scripts/read.cjs" skill classroom-live
```

`<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份醫智匯 skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `wanfangai-connect` 那份的（2026-10-01 第 171 項）。
輸出的最後一行是「（skill classroom-live 全文到此結束）」，沒看到就單獨再讀一次，不要憑記憶補。
讀到的內容照做；平台契約（`wanfangai-connect` 帶你讀）與這份衝突時，以契約為準。
