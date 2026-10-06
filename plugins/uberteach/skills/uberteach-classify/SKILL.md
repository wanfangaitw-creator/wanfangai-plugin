---
name: uberteach-classify
description: UberTeach 工具要寫或改 app-manifest.yml、決定資安等級，或使用者提到病人、員工、名單、要存資料、Google 試算表時用：先做分級問診，這決定工具能不能上線。
---

# 分級問診與分類

**規則只有一份：平台上的契約（llms.txt）。**這一章最常被讀取工具截掉，所以一定單獨讀：

```
node "<這個資料夾>/scripts/read.cjs" contract 3
```

`<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/uberteach/uberteach/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/uberteach/uberteach/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份 UberTeach skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `uberteach-connect` 那份的（2026-10-01 第 171 項）。

**一個指令只讀一章**（兩章放在同一個指令裡，加起來就超過讀取工具的上限，會被截掉）。
每一章的輸出最後一行是「（第 N 章到此結束）」；**沒看到這一行、或看到 `truncated`／`omitted` 之類的省略標記，就單獨再讀那一章**，不要憑記憶補。

## 做法

1. 讀第 3 章，**照順序問使用者**，一次一題、用他聽得懂的話。不要自己猜答案、不要替他決定等級。
2. 依答案再讀：
   - 要存資料、或要記「誰做的」→ 第 4.7 章（資料儲存）與第 4.5 章（身分 SDK）
   - Google 試算表 → 第 4.8 章
   - 「給誰用」→ 第 4.55 章
   - 要用 AI → 第 4.6 章（目前未開放，照那一章跟他說）
3. 範例資料一律照鐵律 1 用約定的假值；需要一批假資料時讀 `skill synthetic-data`：
   ```
   node "<這個資料夾>/scripts/read.cjs" skill synthetic-data
   ```

平台發佈時會自己再算一次等級下限，宣告比它低就擋下——問診是為了一次做對，不是為了過關。
