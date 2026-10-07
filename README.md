# UberTeach plugin（Codex／ChatGPT、Claude Code）

讓 AI 助手在 UberTeach 院內工具平台上做事時，知道**每一步該讀平台契約的哪一章**，並附上連接與建立應用用的指令。
規則不在這裡：一律從平台即時讀取（`llms.txt`，一章一章讀）。

> **這個 repo 是產生出來的，不要直接改。**正本在平台的程式碼庫 `plugins/uberteach/`，
> 用 `scripts/plugin-build.mjs` 產生後推到這裡。

## 安裝

### Codex（ChatGPT）

- **院方 ChatGPT 工作區的帳號**：工作區管理員已經裝好，開一個新對話就能用。
- **個人帳號**：ChatGPT 桌面版 → 設定 → Plugins → 右上角 **Add → Add a marketplace**
  - Source：`wanfangaitw-creator/wanfangai-plugin`
  - Git ref、Sparse paths：**都留空**（框裡的灰字只是範例）
  - 按 Add marketplace，在清單裡找「UberTeach 院內工具平台」安裝，然後**開一個新的對話**。

### Claude Code

同一個 repo、同一份內容（院內同仁目前用的是 Codex，Claude Code 的安裝方式先寫在這裡、還沒放上平台的連接頁）。在終端機：

```
claude plugin marketplace add wanfangaitw-creator/wanfangai-plugin
claude plugin install uberteach@uberteach
```

或在 Claude Code 對話裡打 `/plugin marketplace add wanfangaitw-creator/wanfangai-plugin`，再從 `/plugin` 的清單安裝。裝好之後**重開 Claude** 才會生效。

## 安全掃描

每一次發佈或改版，這個 plugin 裡的每一份 skill 都用兩個第三方開源工具檢查過：
NVIDIA SkillSpector 與 Cisco Skill Scanner（離線執行，不連網、不送 AI 分析）。
嚴重度「高」以上而且沒有說明理由的發現會擋下發佈；接受的例外都附理由。
結果在同一個 repo 的 [`SECURITY-SCAN.md`](SECURITY-SCAN.md)。

通過代表「列出的自動檢查沒有發現擋下的問題」，不代表保證安全。這個 plugin 只會連到你所屬院區的 UberTeach 平台與 GitHub 上的版本號，
鑰匙只存在你家目錄的 `.uberteach` 資料夾。
