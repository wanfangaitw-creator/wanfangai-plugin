---
name: wanfangai-new-app
description: 在醫智匯平台做一個要給院內同仁用的新工具時用：查有沒有現成的、選官方做法、建立應用與程式碼倉庫、第一次存版本。沒說是院內用就先問；自己用、不放院內的工具不用這份。還沒連上平台先用 wanfangai-connect。
---

## 先用平台工具（這個 plugin 帶了醫智匯的平台工具）

0. **先確定是醫智匯的工具**：使用者沒說要放在醫智匯（院內平台）給院內同仁用、也沒有貼連接頁的文字，只說「做一個小工具」，
   或要做網頁、表單、後台、儀表板而提到科室、病房、同事、院內時，**動手之前、也在用別的建站工具（例如 Sites）之前**，
   先問一句：「這個工具是要放在**醫智匯平台給院內同仁用**，還是**自己用、不放院內**？」
   答院內用：用醫智匯做，不要改用別的建站工具——那些放在院外，同事要另外登入，資料也不在院內（2026-11-11 S64 第四輪，第 350 項）。
   答自己用：這份與其他醫智匯 skill 都不用、也不要呼叫 `wanfangai_` 工具，照一般的方式做（2026-10-12 Gary：有些同仁也做自己的專案）。
1. **先呼叫 `wanfangai_status`**（工具清單裡沒看到就先用工具搜尋找 `wanfangai`）。回了使用者的名字＝平台工具可用，接下來一律用工具：
   查重複 `wanfangai_find_similar`、分級問診 `wanfangai_classify`、建立應用 `wanfangai_create_app`、
   存版本 `wanfangai_save_version`（不用 git；檔案多、有圖片或有建置輸出時，先用 `wanfangai_upload_url` 拿上傳網址，
   在專案資料夾執行這份 skill 旁 `wanfangai-publish` 的 `scripts/pack-upload.cjs` 打包上傳，再帶 upload_id 存）、
   換電腦或本機沒有專案資料夾時用 `wanfangai_read_files` 讀回來、發佈 `wanfangai_publish`、問狀態與發佈進度 `wanfangai_app_status`。
   分級的題目與建立前的確認**在醫智匯的網頁上由使用者本人答**：工具回網址，把網址給他、請他答完回來說一聲，你再呼叫一次。發佈前的同意**由平台的表單直接問他**。你不要在對話裡問那幾題、不要替他回答、不要用瀏覽器替他按、不要自己說是幾級。
2. 回「Authentication required」：請使用者登入，在瀏覽器按「允許」，**完成後再呼叫一次**。
   Codex：按「重新連線」（或 設定 → 外掛程式 → MCP → wanfangai 的「驗證」）。
   Claude 桌面版（Code）：對話裡會出現「This MCP server needs you to sign in」卡片，請他按卡片上的「Open MCP servers」，在 wanfangai 那一列按「Connect」。
   Claude Code 終端機：在對話框輸入 `/mcp`，選 `plugin:wanfangai:wanfangai` 登入；看不到登入的選項，就請他在終端機執行 `claude mcp login plugin:wanfangai:wanfangai`。
   在這之前**不要改用下面的做法、不要先做本機原型**。
3. **找不到 `wanfangai_` 開頭的工具**：告訴使用者「醫智匯的平台工具沒有連上」。
   Codex，**以前用過、突然找不到**：多半是連線中斷了，Codex 還留著失效的登入資料，所以不會跳「驗證」（2026-11-13，第 360 項）。
   照官方做法 `troubleshoot` 的「以前連得上，突然找不到醫智匯的工具」做：請他把 ChatGPT **完全結束再打開**（Windows：工作列右下角的 ChatGPT 圖示按右鍵選「Exit」，只關視窗不算；Mac：⌘Q），
   到 設定 → 外掛程式 → MCP 在 wanfangai 那一列按「驗證」、在瀏覽器按「允許」，再到 **Codex** **開一個新的對話**（左上角選「Codex」，不是「ChatGPT」；這個對話拿不到工具，不要在這裡重試）；
   把那一段的網址 https://platform.wanfangai.tw/help#reconnect 給他。不要代跑 `codex mcp logout`、不要用 Computer Use 替他按。
   **不要叫他重裝外掛**，照那一段做完還是不行才是。第一次用：請他到 設定 → 外掛程式 → MCP 看 wanfangai 是不是要按「驗證」。
   Claude 桌面版（Code）：請他到 設定 → Customize → Plugins 打開 Wanfangai，看開關有沒有開、有沒有「Connectors」分頁（沒有就是舊版，按「Update」），再開一個新的 Code 對話。
   Claude Code 終端機：請他在 `/mcp` 看 `plugin:wanfangai:wanfangai` 是不是被關掉或連不上；清單裡沒有，請他把 Claude 完全關掉重開（剛裝或剛更新外掛時會這樣），
   還是沒有就執行 `claude plugin update wanfangai@wanfangai` 再重開。
   他確認了、還是沒有平台工具，才照下面的做法。
4. **有平台工具時不要用 `read.cjs`**：做法用 `wanfangai_list_skills`、`wanfangai_read_skill` 讀。
   `read.cjs` 回 DNS、ENOTFOUND、EAI_AGAIN、fetch failed 這類錯誤，是這台電腦的沙箱擋了它的網路，**不是要重新驗證**：
   不要叫使用者去按「驗證」，改用平台工具繼續（2026-10-12 演練站：叫使用者去驗證，但他早就驗證過了）。
5. **這個平台已停發設定碼**：不要向使用者要設定碼、不要叫他去連接頁產生設定碼，
   也不要找 `bootstrap.cjs`、`create-app.cjs`、`rotate-key.cjs`（這版外掛沒有）；專案鑰匙與 git 也都不用。
   平台工具連不上就停下來，請使用者照第 2、3 步處理，或到平台的「連接 AI 助手」頁看步驟。
   下面的做法只剩讀做法與說明可以參考，要做的事一律用平台工具。


# 在醫智匯做一個新工具

**規則只有一份：平台上的契約（llms.txt）。**這份 skill 只告訴你讀哪幾章、用哪支附帶的指令。一律一章一章讀。

`<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份醫智匯 skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `wanfangai-connect` 那份的（2026-10-01 第 171 項）。

**一個指令只讀一章**（兩章放在同一個指令裡，加起來就超過讀取工具的上限，會被截掉）。
每一章的輸出最後一行是「（第 N 章到此結束）」；**沒看到這一行、或看到 `truncated`／`omitted` 之類的省略標記，就單獨再讀那一章**，不要憑記憶補。

## 做法

**沒有平台工具、又讀不到契約（`read.cjs` 失敗、連不上平台）時，停下來告訴使用者**，請他確認連線（有平台工具就照上面用工具，不用停）；不要自己在對話裡問分級題目，也不要只做一個把資料存在瀏覽器裡的本機原型（2026-10-12 演練站：讀不到契約就自己亂問、做了 localStorage 原型）。

1. 讀專案生命週期與怎麼跟使用者說話，照著做：
   ```
   node "<這個資料夾>/scripts/read.cjs" contract 2
   ```
   ```
   node "<這個資料夾>/scripts/read.cjs" contract 2.5
   ```
2. 寫 `app-manifest.yml` 之前，先用 `wanfangai-classify`（分級問診）。
   **有平台工具時，建立應用用 `wanfangai_create_app`**（不用下面第 4 步的指令）：跟他談好網址代號與名稱後呼叫，平台回一個網址，請他在醫智匯網頁上勾兩項、按「建立」，回來說一聲，你再**只帶 `triage_id`** 呼叫拿起始檔案（2026-11-07 起，M90）。
   **動手寫頁面內容之前**先問他要不要上網找參考資料；查到的事實（規定、時間、別院的作法）**先唸給他確認**才寫進去——
   加一句「以本院規範為準」不等於問過他（2026-10-01 第 175 項）。細節在第 2 章。
   要用 `UberTeach.me({require:"workspace"})` 擋外人時，先看第 4.5 章：他自己用 Gmail 登入的話，他自己也會被擋，**寫之前先問他**（第 173 項）。
3. 選做法：列出官方 skill，挑合用的讀全文（讀到的是平台**目前發佈**的版本）：
   ```
   node "<這個資料夾>/scripts/read.cjs" skills
   ```
   ```
   node "<這個資料夾>/scripts/read.cjs" skill <名稱>
   ```
   這個 plugin 裡的 `wanfangai-<名稱>` skill 也會帶你讀同一份。
4. 第 2 章要你執行建立應用的那串 `node -e` 指令時，**改執行這支，而且直接用要求提高權限的方式**（它要寫使用者家目錄，一般沙箱寫不進去；
   它自己會先試寫，寫不進去就停、**不建立應用**）。效果相同：專案鑰匙直接寫進 `~/.uberteach/git/<slug>`，只印存檔位置：
   ```
   node "<這個資料夾>/scripts/create-app.cjs" <金鑰檔完整路徑> <slug> <A|B> "<名稱>" "<一句話說明>"
   ```
   它印出的路徑就是鐵律 2 `credential.helper` 要填的那一個。其餘步驟照第 2 章。
   **接著的 `git clone`、之後的 `git push`，也直接用要求提高權限的方式執行**，帶鐵律 2「沙箱：不經 helper 的做法」的標頭——
   沙箱用不通的代理擋 git 的網路（撞到 `127.0.0.1:9`），node 不受影響（第十次實跑第 181 項）。
   只改這個應用的資料夾；給平台維護者的建議寫在回覆裡，不要另外找檔案寫（第 183 項）。
   **要換這台電腦的專案鑰匙時**（推不上去、換了電腦、接手舊應用），第 2 章會叫你執行換鑰匙的那串 `node -e`——**改執行這支，一樣直接用要求提高權限的方式**
   （它先試寫、寫不進去就不換，換到了直接寫進同一個檔；在一般沙箱先跑，平台發的新鑰匙會掉在地上）：
   ```
   node "<這個資料夾>/scripts/rotate-key.cjs" <金鑰檔完整路徑> <slug>
   ```
5. 使用者要決定「給誰用」時讀第 4.55 章；要存資料讀第 4.7 章；要讀寫 Google 試算表讀第 4.8 章。

找不到 `scripts/` 或指令跑不起來，就照契約原本的指令做；**不要自己改寫指令**。
