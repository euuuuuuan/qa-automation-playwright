# 🌐 웹 자동화 테스트 (Playwright)

---

### 🌟 프로젝트 소개

이 프로젝트는 **Playwright와 JavaScript**를 활용하여 **구글 검색 기능**을 자동화 테스트한 예제입니다.  

브라우저에서 반복적으로 수행되는 검색 시나리오를 자동화하여, QA 과정에서의 효율성과 정확성을 높이는 데 중점을 두었습니다.

---

### 🚀 주요 기능

- ✅ **검색 자동화**: 구글에서 특정 키워드("Playwright")를 검색하고 첫 번째 결과 타이틀을 확인합니다.  
- ✅ **크로스 브라우저 지원**: Chromium, Firefox, WebKit 등 다양한 브라우저 환경에서 동일한 테스트 실행 가능.  
- ✅ **테스트 리포트**: Playwright 기본 HTML 리포트 및 Allure 리포트를 통해 결과를 시각적으로 확인.  

---

## 💡 기술적 성과 및 문제 해결

- 🚀 Playwright 및 테스트 자동화 프레임워크를 단기간 내 습득하여 **웹 UI 자동화 시나리오를 구현**.  
- 🛠️ 테스트 실행 환경에서 발생한 **버전 차이 및 CI/CD 파이프라인 에러**를 해결하며, 문제 해결 능력을 증명.  
- 📊 Allure Report와 Trace Viewer를 활용해 **테스트 실패 원인 분석** 및 **디버깅 가시성**을 강화.  

---

## 🤖 AI 도구 활용

본 프로젝트는 **ChatGPT, Google Gemini, Claude** 등의 AI 도구를 적극적으로 활용했습니다.

- 📚 **학습 지원**: Playwright 및 CI/CD 설정 관련 학습 곡선을 단축.  
- ✨ **코드 품질 개선**: Locator 전략 최적화 및 리팩토링에 AI 피드백 반영.  
- 📝 **문서화 보조**: README 및 프로젝트 구조 설명을 AI를 통해 정리.  

---

### 🛠️ 개발 환경 및 실행 방법

#### **실행 환경**

- ![Node.js](https://img.shields.io/badge/Node.js-22.19.0-339933?style=flat-square&logo=nodedotjs&logoColor=white)  
- ![Playwright](https://img.shields.io/badge/Playwright-1.55.0-2EAD33?style=flat-square&logo=playwright&logoColor=white)  
- ![Allure Report](https://img.shields.io/badge/Allure-2.34.1-FF5A5F?style=flat-square&logo=allure&logoColor=white)   

---

#### **실행 방법**

1️⃣ **프로젝트 클론**
[git clone](https://github.com/euuuuuuan/qa-automation-playwright.git)



2️⃣ 의존성 설치

```
cd qa-automation-playwright
npm install
npx playwright install --with-deps
```

3️⃣ 테스트 실행
```
npx playwright test
npx playwright test --headed (GUI 모드)
```

4️⃣ 리포트 확인
테스트 실행 후 다음 명령어를 통해 테스트 결과를 확인할 수 있습니다.

# HTML 리포트

npx playwright show-report
```
# Allure Reporter
```
- 리포트 생성: 테스트 결과 파일(allure-results)을 기반으로 HTML 리포트를 만듭니다.
```
npx allure generate ./allure-results --clean -o ./allure-report
```

- 리포트 열기: 생성된 리포트를 웹 브라우저로 엽니다.
```
npx allure open ./allure-report
```

---

## 📈 테스트 과정 및 결과
테스트 절차: 구글 접속 → 키워드 입력("Playwright") → 검색 결과 확인.

테스트 통과 화면: 검색 결과 첫 번째 타이틀에 "Playwright" 포함 여부 확인.

실행 결과 리포트는 'google-search-playwright-result 첨부된 이미지 파일에서 확인이 가능하다.

내용:
1. 결과는 3가지 케이스 중에서 2가지는 성공하였다는 내용이다.
2. 처음 실행시에는 3가지 모두 실패했다는 내용이 확인되었다.
3. 'npx playwright test tests/login.spec.js --headed' 명렁어를 통해 브라우저의 작동을 확인했다.
4. 수동으로 CAPTCHA 인증을 진행해주어, 2가지는 패스하는 것을 확인했다.

// 결론: 구글의 자동화 보안성으로 인해 실행이 실패하는 것을 확인할 수 있다. 계정 로그인도 불가하다.

---
📸 시연 예시


<img src="https://github.com/euuuuuuan/qa-automation-playwright/blob/main/docs/screenshots/google-search-playwright-result.png" width="700px">
<img src="https://github.com/euuuuuuan/qa-automation-playwright/blob/main/docs/screenshots/allure-report-ex.png" width="700px">
---


## 📂 프로젝트 구조 예시
```
/QA-AUTOMATION-PLAYWRIGHT
├── 📂.github/                  # GitHub Actions 워크플로우 파일
├── 📂allure-report/            # Allure 리포트 HTML 파일
├── 📂allure-results/           # Allure 리포트 생성용 데이터
├── 📂docs/                     # 문서 파일
│   └── screenshots/          # 스크린샷 이미지
├── node_modules/             # Node.js 패키지
├── playwright-report/        # Playwright 기본 HTML 리포트
├── test-results/             # 실패한 테스트의 결과 (트레이스, 스크린샷)
├── 📂tests/                    # 실제 테스트 파일 (.spec.js)
│   ├── google-search.spec.js
│   └── login.spec.js
├── 📂tests-examples/           # Playwright 공식 예제 테스트 파일
│   └── demo-todo-app.spec.js
├── .gitignore                # Git 추적에서 제외할 파일 목록
├── auth.json                 # 로그인 세션 정보 (Git 제외)
├── package.json              # 프로젝트 의존성 및 스크립트
├── package-lock.json         # 정확한 패키지 버전 관리
├── playwright.config.js      # Playwright 설정 파일
└── README.md                 # 프로젝트 설명 파일

```
 ---
### 🧑‍💻 개발자 정보

| 이름   | 역할               | 연락처                                                                 |
| :----- | :----------------- | :--------------------------------------------------------------------- |
| 전유안 | QA 자동화 엔지니어 | GitHub: [euuuuuuan](https://github.com/euuuuuuan)
