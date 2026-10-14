---
name: wanfangai-three-d
description: "醫智匯平台（院內）的官方做法「3D 互動模型（three.js）」：可以用滑鼠或手指轉動、縮放的 3D 模型：解剖位置教學、器材構造、空間動線。模型上的標記點了出現說明。用平台提供的 three.js，不存資料。使用者問能不能用 Unity、Godot、Unreal 或 WebAssembly：直接答「不行」（平台跑不起來，不是「不建議」），3D 一律用這份。只用在醫智匯的工具。"
---

# 3D 互動模型（three.js）（官方做法 `three-d`）

全文在平台上，**每次用之前讀平台目前發佈的版本**（這裡不放副本：新版什麼時候給 AI 助手看，是平台管理員發佈時決定的）。
**有 `wanfangai_` 開頭的平台工具時，用 `wanfangai_read_skill`（name: `three-d`）讀**，不要用下面的指令（有些電腦的沙箱不讓它連網路）；沒有平台工具才用：

```
node "<這個資料夾>/scripts/read.cjs" skill three-d
```

`<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份醫智匯 skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `wanfangai-connect` 那份的（2026-10-01 第 171 項）。
輸出的最後一行是「（skill three-d 全文到此結束）」，沒看到就單獨再讀一次，不要憑記憶補。
讀到的內容照做；平台契約（`wanfangai-connect` 帶你讀）與這份衝突時，以契約為準。
