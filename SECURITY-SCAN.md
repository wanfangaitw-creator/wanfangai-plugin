# 醫智匯 plugin 2026.10.3 安全掃描報告

產生時間：2026-10-07 12:14 UTC　結果：**通過**

這份報告由發佈流程自動產生：每一次發佈或改版，plugin 裡的每一份 skill 都用兩個第三方開源掃描工具檢查過，
工具只在離線模式執行（不連網、不送 AI 分析）。**通過代表「下面列的自動檢查沒有發現擋下的問題」，不代表保證安全。**

| 工具 | 版本 |
|---|---|
| NVIDIA SkillSpector | SkillSpector v2.12.0 |
| Cisco Skill Scanner | skill-scanner 2.2.1 |
| 掃描映像 | `skill-audit:local`（sha256:111725f639b8） |

擋下的門檻：嚴重度「高」以上、而且不在例外清單；掃描工具沒有跑完也算未通過。

| skill | SkillSpector 風險分數 | 中以上的發現 | 低與資訊 | 結果 |
|---|---|---|---|---|
| uberteach-app-metrics | 32 | 3 | 3 | 通過 |
| uberteach-chart-dashboard | 32 | 3 | 3 | 通過 |
| uberteach-classify | 32 | 3 | 3 | 通過 |
| uberteach-connect | 52 | 5 | 3 | 通過 |
| uberteach-content-site | 32 | 3 | 3 | 通過 |
| uberteach-faq-bot | 32 | 3 | 3 | 通過 |
| uberteach-form-app | 32 | 3 | 3 | 通過 |
| uberteach-html-slides | 32 | 3 | 3 | 通過 |
| uberteach-new-app | 39 | 4 | 3 | 通過 |
| uberteach-publish | 32 | 3 | 3 | 通過 |
| uberteach-sheet-form | 32 | 3 | 3 | 通過 |
| uberteach-sheet-viewer | 32 | 3 | 3 | 通過 |
| uberteach-staff-survey | 32 | 3 | 3 | 通過 |
| uberteach-static-app | 32 | 3 | 3 | 通過 |
| uberteach-synthetic-data | 32 | 3 | 3 | 通過 |

## 中以上的發現

- **uberteach-app-metrics**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-app-metrics**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-app-metrics**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-chart-dashboard**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-chart-dashboard**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-chart-dashboard**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-classify**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-classify**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-classify**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-connect**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:11`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-connect**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:17`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-connect**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-connect**　［中］SkillSpector E1「External Transmission」　`scripts/bootstrap.cjs:6`
  - 已接受：連接平台：把使用者貼的設定碼送到平台換鑰匙（POST /api/v1/agent/bootstrap），鑰匙存在使用者家目錄的 .uberteach。對象只有平台本身。指令與契約 §1 同一份。（2026-10-06）
- **uberteach-connect**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-content-site**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-content-site**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-content-site**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-faq-bot**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-faq-bot**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-faq-bot**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-form-app**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-form-app**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-form-app**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-html-slides**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-html-slides**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-html-slides**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-new-app**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:10`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-new-app**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-new-app**　［中］SkillSpector E1「External Transmission」　`scripts/create-app.cjs:6`
  - 已接受：建立應用：用平台金鑰呼叫 POST /api/v1/apps。對象只有平台本身。指令與契約 §2 同一份。（2026-10-06）
- **uberteach-new-app**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-publish**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:17`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-publish**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-publish**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-sheet-form**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-sheet-form**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-sheet-form**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-sheet-viewer**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-sheet-viewer**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-sheet-viewer**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-staff-survey**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-staff-survey**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-staff-survey**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-static-app**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-static-app**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-static-app**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **uberteach-synthetic-data**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **uberteach-synthetic-data**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **uberteach-synthetic-data**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:31`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）

## 例外清單

每一項都附理由；清單在原始碼 `infra/skill-audit/allowlist.json`。

- skillspector AE1（SKILL.md）：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。
- cisco DATA_EXFIL_JS_NETWORK（scripts/read.cjs）：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。
- skillspector E1（scripts/bootstrap.cjs）：連接平台：把使用者貼的設定碼送到平台換鑰匙（POST /api/v1/agent/bootstrap），鑰匙存在使用者家目錄的 .uberteach。對象只有平台本身。指令與契約 §1 同一份。
- skillspector E1（scripts/create-app.cjs）：建立應用：用平台金鑰呼叫 POST /api/v1/apps。對象只有平台本身。指令與契約 §2 同一份。
- skillspector E1（scripts/rotate-key.cjs）　＊這次沒有用到：換專案鑰匙：用平台金鑰呼叫平台的 token/rotate。對象只有平台本身。指令與契約 §2 同一份。
