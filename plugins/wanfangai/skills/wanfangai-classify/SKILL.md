---
name: wanfangai-classify
description: 醫智匯平台上的工具要寫或改 app-manifest.yml、決定資安等級時用（使用者提到病人、員工、名單、要存資料、Google 試算表）：先做分級問診，這決定工具能不能上線。不是醫智匯的工具不用這份。
---

## 先用平台工具（這個 plugin 帶了醫智匯的平台工具）

0. **先確定是醫智匯的工具**：使用者沒說要放在醫智匯（院內平台）給院內同仁用、也沒有貼連接頁的文字，只說「做一個小工具」時，
   先問一句：「這個工具是要放在**醫智匯平台給院內同仁用**，還是**自己用、不放院內**？」
   答自己用：這份與其他醫智匯 skill 都不用、也不要呼叫 `wanfangai_` 工具，照一般的方式做（2026-10-12 Gary：有些同仁也做自己的專案）。
1. **先呼叫 `wanfangai_status`**（工具清單裡沒看到就先用工具搜尋找 `wanfangai`）。回了使用者的名字＝平台工具可用，接下來一律用工具：
   查重複 `wanfangai_find_similar`、分級問診 `wanfangai_classify`、建立應用 `wanfangai_create_app`、
   存版本 `wanfangai_save_version`（不用 git；檔案多、有圖片或有建置輸出時，先用 `wanfangai_upload_url` 拿上傳網址，
   在專案資料夾執行這份 skill 旁 `wanfangai-publish` 的 `scripts/pack-upload.cjs` 打包上傳，再帶 upload_id 存）、
   換電腦或本機沒有專案資料夾時用 `wanfangai_read_files` 讀回來、發佈 `wanfangai_publish`、問狀態與發佈進度 `wanfangai_app_status`。
   分級的題目、建立前的確認、發佈前的同意**由平台的表單直接問使用者**：你不要在對話裡問那幾題、不要替他回答、不要自己說是幾級。
2. 回「Authentication required」：請使用者在 Codex 按「重新連線」（或 設定 → 外掛程式 → MCP → wanfangai 的「驗證」），在瀏覽器按「允許」，**完成後再呼叫一次**。
   在這之前**不要改用下面的做法、不要先做本機原型**。
3. **找不到 `wanfangai_` 開頭的工具**：告訴使用者「醫智匯的平台工具沒有連上」，請他到 設定 → 外掛程式 → MCP 看 wanfangai 是不是要按「驗證」。
   他確認了、還是沒有平台工具，才照下面的做法。
4. **有平台工具時不要用 `read.cjs`**：做法用 `wanfangai_list_skills`、`wanfangai_read_skill` 讀。
   `read.cjs` 回 DNS、ENOTFOUND、EAI_AGAIN、fetch failed 這類錯誤，是這台電腦的沙箱擋了它的網路，**不是要重新驗證**：
   不要叫使用者去按「驗證」，改用平台工具繼續（2026-10-12 演練站：叫使用者去驗證，但他早就驗證過了）。
5. **這個平台已停發設定碼**：不要向使用者要設定碼、不要叫他去連接頁產生設定碼，
   也不要找 `bootstrap.cjs`、`create-app.cjs`、`rotate-key.cjs`（這版外掛沒有）；專案鑰匙與 git 也都不用。
   平台工具連不上就停下來，請使用者照第 2、3 步處理，或到平台的「連接 AI 助手」頁看步驟。
   下面的做法只剩讀做法與說明可以參考，要做的事一律用平台工具。


# 分級問診與分類

**規則只有一份：平台上的契約（llms.txt）。**這一章最常被讀取工具截掉，所以一定單獨讀：

```
node "<這個資料夾>/scripts/read.cjs" contract 3
```

`<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份醫智匯 skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `wanfangai-connect` 那份的（2026-10-01 第 171 項）。

**一個指令只讀一章**（兩章放在同一個指令裡，加起來就超過讀取工具的上限，會被截掉）。
每一章的輸出最後一行是「（第 N 章到此結束）」；**沒看到這一行、或看到 `truncated`／`omitted` 之類的省略標記，就單獨再讀那一章**，不要憑記憶補。

## 做法

**沒有平台工具、又讀不到契約（`read.cjs` 失敗、連不上平台）時，停下來告訴使用者**，請他確認連線（有平台工具就照上面用工具，不用停）；不要自己在對話裡問分級題目，也不要只做一個把資料存在瀏覽器裡的本機原型（2026-10-12 演練站：讀不到契約就自己亂問、做了 localStorage 原型）。

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
