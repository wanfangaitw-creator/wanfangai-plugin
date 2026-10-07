---
name: uberteach-content-site
description: "醫智匯 官方做法「內容網站（衛教、成果報告、教材）」：好幾頁的內容網站：各科衛教、研究成果報告、案例研討、工作坊教材、專欄。有導覽列、圖片、音檔、可下載的 PDF，手機好讀也好列印。不存資料。"
---

# 內容網站（衛教、成果報告、教材）（官方做法 `content-site`）

全文在平台上，**每次用之前讀平台目前發佈的版本**（這裡不放副本：新版什麼時候給 AI 助手看，是平台管理員發佈時決定的）：

```
node "<這個資料夾>/scripts/read.cjs" skill content-site
```

`<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/uberteach/uberteach/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/uberteach/uberteach/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份醫智匯 skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `uberteach-connect` 那份的（2026-10-01 第 171 項）。
輸出的最後一行是「（skill content-site 全文到此結束）」，沒看到就單獨再讀一次，不要憑記憶補。
讀到的內容照做；平台契約（`uberteach-connect` 帶你讀）與這份衝突時，以契約為準。
