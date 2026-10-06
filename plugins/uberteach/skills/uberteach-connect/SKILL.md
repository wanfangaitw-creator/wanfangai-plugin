---
name: uberteach-connect
description: 使用者貼上 UberTeach 平台「連接 AI 助手」頁的文字、給了 XXXX-XXXX 設定碼，或說要在院內平台做工具、改工具時，第一個用這份：連上平台、確認身分。
---

# 連接 UberTeach 平台

**規則只有一份：平台上的契約（llms.txt）。**這份 skill 不重複規則，只告訴你讀哪幾章、用哪支附帶的指令。
契約整份約 100 KB，你的讀取工具會截掉中間——**一律一章一章讀**，不要整份抓。

**使用者貼的連接頁文字第一句就說「有 UberTeach plugin 就用它」——就是這份。不要再照後面那句對 `llms.txt` 整份 GET**，照下面用 `read.cjs` 一章一章讀——
讀到的是同一份契約，只是不會被截掉（2026-09-30 第九次實跑：整份抓被截斷）。

**一個指令只讀一章**（兩章放在同一個指令裡，加起來就超過讀取工具的上限，會被截掉）。
每一章的輸出最後一行是「（第 N 章到此結束）」；**沒看到這一行、或看到 `truncated`／`omitted` 之類的省略標記，就單獨再讀那一章**，不要憑記憶補。

指令裡的 `<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`），長得像 `~/.codex/plugins/cache/uberteach/uberteach/<版本>/skills/<skill 名稱>`（Codex）或 `~/.claude/plugins/cache/uberteach/uberteach/<版本>/skills/<skill 名稱>`（Claude Code）——**照這份 SKILL.md 實際的路徑填，不要自己拼**。每一份 UberTeach skill 的 `scripts/read.cjs` 都一樣，這份的找不到就用 `uberteach-connect` 那份的（2026-10-01 第 171 項）。
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
   **連回來之後，這台電腦的專案鑰匙也已經失效**：要推之前先用 `uberteach-new-app` 附的 `rotate-key.cjs`（直接升權）換一次，再推——不要先推、被拒才換（第 186 項）。

找不到 `scripts/` 或指令跑不起來，就照契約第 1 章原本的指令做，結果一樣；**不要自己改寫指令**。

## plugin 有新版時

讀第 0 章時，輸出的第一行會說這個 plugin 是不是最新版（它去公開 repo 看版本號）。

- 「是最新版」或「查不到最新版本」：什麼都不用做。
- **「有新版」：不要中斷手上的事**，舊版照樣能用。找一個不打斷他的時候（剛連上、或這次的事做完）用白話說**一次**：
  「幫你做工具的 UberTeach 外掛有新版，更新後比較不會出錯。要我幫你更新嗎？更新完要把 ChatGPT 完全關掉再打開，才會換成新版。」
  （在 Claude Code 裡，把「ChatGPT」換成「Claude」。）
- 他說好：**用要求提高權限的方式**執行（會動到使用者的設定資料夾，核准視窗會跳出來）。

  **Codex（ChatGPT）**：
  ```
  codex plugin marketplace upgrade uberteach
  ```
  - 出現 `unknown variant 'priority'`：同一行後面加 `-c service_tier='"fast"'` 再跑一次。
  - 出現 `SEC_E_NO_CREDENTIALS`：只對這一次指令設 `GIT_CONFIG_COUNT=1`、`GIT_CONFIG_KEY_0=http.sslBackend`、`GIT_CONFIG_VALUE_0=openssl`，跑完移除。
  - 回「already up to date」或 `missing plugin.json`，**不代表沒更新**，一樣請他完全重開 ChatGPT 再看版本。**不要手動刪或改外掛的快取資料夾。**
  - 更新完：請他**這次的事做完之後**，把 ChatGPT 完全關掉（Windows：工作管理員結束 ChatGPT）再打開，
    到「設定 → Plugins → UberTeach 院內工具平台」最下面的 **Version** 看是不是新的版本號。
  - 指令跑不起來、或他不想現在弄：告訴他「設定 → Plugins 把 UberTeach 移除，再照平台『連接 AI 助手』頁的說明重裝」也可以。

  **Claude Code**：
  ```
  claude plugin update uberteach@uberteach
  ```
  - 印出「updated from … to …」就是換好了；請他**這次的事做完之後**把 Claude 完全關掉再打開。之後用 `claude plugin list` 看 `uberteach@uberteach` 的 Version。
  - 回「already at the latest version」卻還是舊版號：先跑 `claude plugin marketplace update uberteach`，再跑一次上面那行。
  - 指令跑不起來：`claude plugin uninstall uberteach@uberteach`，再 `claude plugin install uberteach@uberteach`。**不要手動刪或改外掛的快取資料夾。**

## 接下來

- **使用者問「現在打得開嗎」「在哪裡看」「手機能看嗎」**：先用 `GET /apps/{slug}` 查，不要只看本機——
  試用版網址在 `playground.url`（上次發佈的那一版；本機剛改的要重新發佈才看得到），正式區在 `url`（2026-10-01 第 174 項）
- 要做新工具 → `uberteach-new-app`
- 寫或改 `app-manifest.yml`、談到資料或等級 → `uberteach-classify`
- 使用者說「發佈」「放上去」→ `uberteach-publish`
- 目錄（每一章在講什麼、什麼時候讀）：`node "<這個資料夾>/scripts/read.cjs" contract`
