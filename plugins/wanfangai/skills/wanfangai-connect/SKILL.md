---
name: wanfangai-connect
description: 使用者要在醫智匯（院內平台）做工具或改工具、或貼上醫智匯「連接 AI 助手」頁的文字時，第一個用這份：連上平台、確認身分。只說「做一個小工具」、沒說是給院內同仁用還是自己用時，先問一句再決定，不要預設是醫智匯。
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


# 連接 醫智匯平台

**規則只有一份：平台上的契約（llms.txt）。**這份 skill 不重複規則，只告訴你讀哪幾章、用哪支附帶的指令。
契約整份約 100 KB，你的讀取工具會截掉中間——**一律一章一章讀**，不要整份抓。

**使用者貼的連接頁文字第一句就說「有 醫智匯 plugin 就用它」——就是這份。不要再照後面那句對 `llms.txt` 整份 GET**，照下面用 `read.cjs` 一章一章讀——
讀到的是同一份契約，只是不會被截掉（2026-09-30 第九次實跑：整份抓被截斷）。

**一個指令只讀一章**（兩章放在同一個指令裡，加起來就超過讀取工具的上限，會被截掉）。
每一章的輸出最後一行是「（第 N 章到此結束）」；**沒看到這一行、或看到 `truncated`／`omitted` 之類的省略標記，就單獨再讀那一章**，不要憑記憶補。

指令裡的 `<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/wanfangai/wanfangai/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份醫智匯 skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `wanfangai-connect` 那份的（2026-10-01 第 171 項）。
附帶的指令在 `<這個資料夾>/scripts/`。

## 做法

1. 讀鐵律與快速開始，照著做：
   ```
   node "<這個資料夾>/scripts/read.cjs" contract 0
   ```
   讀完、確認最後一行是「（第 0 章到此結束）」，**再另外執行**：
   ```
   node "<這個資料夾>/scripts/read.cjs" contract 1
   ```
   第一行印出的「契約版本」記下來：之後任何平台回應的 `X-Docs-Version` 跟它不同，就重讀正在用的那一章。
2. 第 1 章的**第 0 步（試寫 `~/.uberteach`）和第 1 步（用設定碼連接）合成一步**：**直接用要求提高權限的方式**執行這支
   （Codex：`sandbox_permissions: "require_escalated"`；Claude Code：有開沙箱就用 `dangerouslyDisableSandbox: true`，沒開就照常執行、由使用者在權限詢問按允許），**不要先在一般沙箱跑**——`~/.uberteach` 在使用者家目錄，一般沙箱一定寫不進去：
   ```
   node "<這個資料夾>/scripts/bootstrap.cjs" XXXX-XXXX
   ```
   它自己會先試寫，寫不進去就停、**不呼叫平台，設定碼不會用掉**；成功時金鑰直接寫進檔案，畫面上只印存檔位置與名字。
   這樣使用者只要核准**一次**（2026-09-30 短測：「Ask for approval」模式下每一次升權都要按一下，分開做按了四次）。
   跟他說「**如果畫面跳出詢問，請按允許；沒有跳出就是已經自動核准，不用做什麼**」——**不要說「請在跳出的視窗按允許」**：
   設成自動審核的電腦不會跳任何東西，他會以為哪裡出錯（2026-10-01 自動實跑第 170 項）。
   使用者沒有核准、或輸出「寫不進」：照實告訴他要按允許才能存鑰匙，**用同一組設定碼**再試（10 分鐘內有效）。
   第 1 章其他步驟照做——特別是連上之後把名字和 email 唸給使用者確認。
3. 第一個連平台的指令就失敗（連不上、憑證錯誤）：讀第 0.5 章。
4. 收到錯誤碼：讀第 9 章。
5. **`401 key_revoked`（這台電腦的連接被取消了）**：要一組新的設定碼。清單上**已經沒有別台電腦**時，連接頁直接有「產生設定碼」；
   **還有別台**時，要先按清單下面的「**連接另一台電腦**」才會出現。**不要叫他按清單上任何一列的「再次連接」**——那是別台電腦，按了會換掉那台的鑰匙
   （2026-10-01 第 178 項：說了「按『產生設定碼』」，她的清單上還有別台，找不到按鈕）。細節在第 1 章。
   **連回來之後，這台電腦的專案鑰匙也已經失效**：要推之前先用 `wanfangai-new-app` 附的 `rotate-key.cjs`（直接升權）換一次，再推——不要先推、被拒才換（第 186 項）。

找不到 `scripts/` 或指令跑不起來，就照契約第 1 章原本的指令做，結果一樣；**不要自己改寫指令**。

## 外掛要更新時

`wanfangai_status` 的 `plugin` 說這台電腦的外掛跟平台配的版本不一樣（`outdated` 是 true，或 `installed` 是 null＝看不出版本），`next` 會寫怎麼做。

- **在那次回答的最後加一句**，同一個對話只說一次；不要停下手上的事，舊版照樣能用：
  「醫智匯外掛有新版。到 ChatGPT 的 設定 → 外掛程式 → 上方的「市集」分頁，在「醫智匯」那一列按「升級」，看到「醫智匯 市集已升級」就好，不用關掉 ChatGPT；之後開新的對話用。」
  （「等一下不打斷他的時候再說」會一直拖到忘記——2026-10-14 演練站實測。市集的「升級」按鈕是 Gary 2026-10-15 在 Windows 找到的，不用重開。）
  升級後版本沒變：請他從工作列右下角系統匣的 ChatGPT 圖示按右鍵 → Exit，再打開（只按視窗的 ✕ 不算）。（在 Claude Code 裡用下面的指令。）
- 還是舊的，他要你幫忙：**用要求提高權限的方式**執行（會動到使用者的設定資料夾，核准視窗會跳出來）。

  **Codex（ChatGPT）**：
  ```
  codex plugin marketplace upgrade wanfangai
  ```
  - 出現 `unknown variant 'priority'`：同一行後面加 `-c service_tier='"fast"'` 再跑一次。
  - 出現 `SEC_E_NO_CREDENTIALS`：只對這一次指令設 `GIT_CONFIG_COUNT=1`、`GIT_CONFIG_KEY_0=http.sslBackend`、`GIT_CONFIG_VALUE_0=openssl`，跑完移除。
  - 回「already up to date」或 `missing plugin.json`，**不代表沒更新**，一樣請他完全重開 ChatGPT 再看版本。**不要手動刪或改外掛的快取資料夾。**
  - 更新完：請他**這次的事做完之後**，從系統匣的 ChatGPT 圖示按右鍵 → Exit 再打開，
    到「設定 → Plugins → 醫智匯 院內工具平台」最下面的 **Version** 看是不是新的版本號。
  - 指令跑不起來、或他不想現在弄：告訴他「設定 → Plugins 把醫智匯（舊名 UberTeach）移除，再照平台『連接 AI 助手』頁的說明重裝」也可以。

  **Claude Code**：
  ```
  claude plugin update wanfangai@wanfangai
  ```
  - 印出「updated from … to …」就是換好了；請他**這次的事做完之後**把 Claude 完全關掉再打開。之後用 `claude plugin list` 看 `wanfangai@wanfangai` 的 Version。
  - 回「already at the latest version」卻還是舊版號：先跑 `claude plugin marketplace update wanfangai`，再跑一次上面那行。
  - 指令跑不起來：`claude plugin uninstall wanfangai@wanfangai`，再 `claude plugin install wanfangai@wanfangai`。**不要手動刪或改外掛的快取資料夾。**

## 接下來

- **使用者問「現在打得開嗎」「在哪裡看」「手機能看嗎」**：先用 `GET /apps/{slug}` 查，不要只看本機——
  試用版網址在 `playground.url`（上次發佈的那一版；本機剛改的要重新發佈才看得到），正式區在 `url`（2026-10-01 第 174 項）
- 要做新工具 → `wanfangai-new-app`
- 寫或改 `app-manifest.yml`、談到資料或等級 → `wanfangai-classify`
- 使用者說「發佈」「放上去」→ `wanfangai-publish`
- 目錄（每一章在講什麼、什麼時候讀）：`node "<這個資料夾>/scripts/read.cjs" contract`
