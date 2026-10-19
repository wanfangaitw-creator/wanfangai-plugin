# 醫智匯 plugin 2026.10.18 安全掃描報告

產生時間：2026-10-19 11:47 UTC　結果：**通過**

這份報告由發佈流程自動產生：每一次發佈或改版，plugin 裡的每一份 skill 都用兩個第三方開源掃描工具檢查過，
工具只在離線模式執行（不連網、不送 AI 分析）。**通過代表「下面列的自動檢查沒有發現擋下的問題」，不代表保證安全。**

| 工具 | 版本 |
|---|---|
| NVIDIA SkillSpector | SkillSpector v2.12.0 |
| Cisco Skill Scanner | skill-scanner 2.2.1 |
| 掃描映像 | `skill-audit:local`（sha256:aeb1fd009c5d） |

擋下的門檻：嚴重度「高」以上、而且不在例外清單；掃描工具沒有跑完也算未通過。

| skill | SkillSpector 風險分數 | 中以上的發現 | 低與資訊 | 結果 |
|---|---|---|---|---|
| wanfangai-app-metrics | 32 | 3 | 3 | 通過 |
| wanfangai-chart-dashboard | 32 | 3 | 3 | 通過 |
| wanfangai-classify | 50 | 6 | 3 | 通過 |
| wanfangai-classroom-live | 32 | 3 | 2 | 通過 |
| wanfangai-connect | 50 | 6 | 3 | 通過 |
| wanfangai-content-site | 32 | 3 | 3 | 通過 |
| wanfangai-faq-bot | 32 | 3 | 3 | 通過 |
| wanfangai-form-app | 32 | 3 | 3 | 通過 |
| wanfangai-html-slides | 32 | 3 | 3 | 通過 |
| wanfangai-new-app | 70 | 9 | 4 | 通過 |
| wanfangai-publish | 70 | 8 | 4 | 通過 |
| wanfangai-react-app | 32 | 3 | 2 | 通過 |
| wanfangai-sheet-form | 32 | 3 | 3 | 通過 |
| wanfangai-sheet-viewer | 32 | 3 | 3 | 通過 |
| wanfangai-staff-survey | 32 | 3 | 3 | 通過 |
| wanfangai-static-app | 32 | 3 | 3 | 通過 |
| wanfangai-synthetic-data | 32 | 3 | 3 | 通過 |
| wanfangai-three-d | 32 | 3 | 2 | 通過 |
| wanfangai-troubleshoot | 32 | 3 | 3 | 通過 |

## 中以上的發現

- **wanfangai-app-metrics**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-app-metrics**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-app-metrics**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-chart-dashboard**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-chart-dashboard**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-chart-dashboard**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-classify**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:21`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-classify**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:22`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-classify**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:38`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-classify**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:45`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-classify**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-classify**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-classroom-live**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-classroom-live**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-classroom-live**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-connect**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:21`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-connect**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:22`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-connect**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:35`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-connect**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:41`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-connect**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-connect**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-content-site**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-content-site**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-content-site**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-faq-bot**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-faq-bot**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-faq-bot**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-form-app**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-form-app**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-form-app**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-html-slides**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-html-slides**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-html-slides**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-new-app**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-new-app**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:21`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-new-app**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:22`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-new-app**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:34`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-new-app**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:41`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-new-app**　［高］SkillSpector PE3「Credential Access」　`scripts/pack-upload.cjs:44`
  - 已接受：「存取憑證」誤判：第 44 行是看到 .env 或 .env.* 就停下來、叫使用者把它移出專案資料夾——程式從不開啟或讀取那個檔，目的正好是不讓放密碼的檔案被上傳。（2026-10-13）
- **wanfangai-new-app**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-new-app**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/pack-upload.cjs:110`
  - 已接受：pack-upload.cjs 確實會把專案資料夾上傳：這就是它的用途（M48 打包上傳）。對象只限平台給的一次性網址（程式先檢查網址必須是 https://<平台>/api/v1/uploads/<token>），不打包 node_modules、.git，遇到 .env 就停。（2026-10-13）
- **wanfangai-new-app**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-publish**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:14`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-publish**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:21`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-publish**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:22`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-publish**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:41`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-publish**　［高］SkillSpector PE3「Credential Access」　`scripts/pack-upload.cjs:44`
  - 已接受：「存取憑證」誤判：第 44 行是看到 .env 或 .env.* 就停下來、叫使用者把它移出專案資料夾——程式從不開啟或讀取那個檔，目的正好是不讓放密碼的檔案被上傳。（2026-10-13）
- **wanfangai-publish**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-publish**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/pack-upload.cjs:110`
  - 已接受：pack-upload.cjs 確實會把專案資料夾上傳：這就是它的用途（M48 打包上傳）。對象只限平台給的一次性網址（程式先檢查網址必須是 https://<平台>/api/v1/uploads/<token>），不打包 node_modules、.git，遇到 .env 就停。（2026-10-13）
- **wanfangai-publish**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-react-app**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-react-app**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-react-app**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-sheet-form**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-sheet-form**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-sheet-form**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-sheet-viewer**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-sheet-viewer**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-sheet-viewer**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-staff-survey**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-staff-survey**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-staff-survey**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-static-app**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-static-app**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-static-app**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-synthetic-data**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-synthetic-data**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-synthetic-data**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-three-d**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-three-d**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-three-d**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）
- **wanfangai-troubleshoot**　［高］SkillSpector AE1「Incomplete referenced artifact analysis」　`SKILL.md:15`
  - 已接受：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。（2026-10-06）
- **wanfangai-troubleshoot**　［中］SkillSpector LP3「Skill declares no tool scope ('permissions' or 'allowed-tools') but code capabilities were detected: network.」　`SKILL.md:1`
  - 列出供參考（未達擋下門檻）
- **wanfangai-troubleshoot**　［中］Cisco DATA_EXFIL_JS_NETWORK「Outbound network request primitives in JavaScript/TypeScript」　`scripts/read.cjs:27`
  - 已接受：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。（2026-10-06）

## 例外清單

每一項都附理由；清單在原始碼 `infra/skill-audit/allowlist.json`。

- skillspector AE1（SKILL.md）：「引用的檔案沒能完整分析」：SkillSpector 離線時對 JavaScript 只做部分分析，指的是 scripts/read.cjs。這是工具的能力限制，不是發現問題；read.cjs 只讀平台的使用說明與 skill（GET）和 GitHub 上的版本號，同一份檔案由 Cisco Skill Scanner 的行為分析看過。
- cisco DATA_EXFIL_JS_NETWORK（scripts/read.cjs）：read.cjs 會連網：只對平台（讀使用說明與 skill）與 raw.githubusercontent.com（讀 plugin 的版本號）發 GET，不送出任何本機資料。
- skillspector E1（scripts/bootstrap.cjs）　＊這次沒有用到：連接平台：把使用者貼的設定碼送到平台換鑰匙（POST /api/v1/agent/bootstrap），鑰匙存在使用者家目錄的 .uberteach。對象只有平台本身。指令與契約 §1 同一份。
- skillspector E1（scripts/create-app.cjs）　＊這次沒有用到：建立應用：用平台金鑰呼叫 POST /api/v1/apps。對象只有平台本身。指令與契約 §2 同一份。
- skillspector E1（scripts/rotate-key.cjs）　＊這次沒有用到：換專案鑰匙：用平台金鑰呼叫平台的 token/rotate。對象只有平台本身。指令與契約 §2 同一份。
- skillspector PE3（scripts/pack-upload.cjs）：「存取憑證」誤判：第 44 行是看到 .env 或 .env.* 就停下來、叫使用者把它移出專案資料夾——程式從不開啟或讀取那個檔，目的正好是不讓放密碼的檔案被上傳。
- cisco DATA_EXFIL_JS_NETWORK（scripts/pack-upload.cjs）：pack-upload.cjs 確實會把專案資料夾上傳：這就是它的用途（M48 打包上傳）。對象只限平台給的一次性網址（程式先檢查網址必須是 https://<平台>/api/v1/uploads/<token>），不打包 node_modules、.git，遇到 .env 就停。
