---
name: uberteach-publish
description: 醫智匯工具要存到雲端檢核、發佈試用版或正式版、更新已上線的工具，或使用者說「發佈」「放上去試試」「上線」時用；上線後的維運與錯誤碼也在這裡找。
---

# 檢核與發佈

**規則只有一份：平台上的契約（llms.txt）。**一律一章一章讀：

```
node "<這個資料夾>/scripts/read.cjs" contract 4
```
```
node "<這個資料夾>/scripts/read.cjs" contract 6
```

`<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/uberteach/uberteach/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/uberteach/uberteach/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份醫智匯 skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `uberteach-connect` 那份的（2026-10-01 第 171 項）。

**一個指令只讀一章**（兩章放在同一個指令裡，加起來就超過讀取工具的上限，會被截掉）。
每一章的輸出最後一行是「（第 N 章到此結束）」；**沒看到這一行、或看到 `truncated`／`omitted` 之類的省略標記，就單獨再讀那一章**，不要憑記憶補。

## 做法

1. 存到雲端之前：第 4 章的檢核；分支與提交慣例在第 5 章。
   **`git fetch`、`git push` 直接用要求提高權限的方式執行**，帶鐵律 2「沙箱：不經 helper 的做法」的標頭——沙箱擋 git 的網路（撞到 `127.0.0.1:9`），node 不受影響（第 181 項）。
2. 使用者說發佈：第 6 章。**第一次上正式區，先單獨問「給誰用」、等他回答，再問要不要發佈**（第 6 章；細節在第 4.55 章）。
3. 遇到要人在網頁上按的按鈕：第 7 章。上線之後的事：第 8 章。
4. 收到錯誤碼：第 9 章。照回應的 `hint` 告訴使用者要按哪裡，不要自己猜。
5. 推不上去、要換這台電腦的專案鑰匙：**直接用要求提高權限的方式**執行（先試寫、寫不進去就不換）：
   ```
   node "<這個資料夾>/scripts/rotate-key.cjs" <金鑰檔完整路徑> <slug>
   ```

平台發佈時會自己檢查 pipeline、等級與開放程度；被擋下時照實告訴使用者原因與做法，不要想辦法繞過。
