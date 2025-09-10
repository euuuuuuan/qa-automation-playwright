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
- ✅ **CI/CD 통합**: GitHub Actions와 연동하여 코드 푸시 시 자동으로 테스트가 실행되도록 구성.  

---

## 💡 기술적 성과 및 문제 해결

- 🚀 Playwright 및 테스트 자동화 프레임워크를 단기간 내 습득하여 **웹 UI 자동화 시나리오를 구현**.  
- 🛠️ 테스트 실행 환경에서 발생한 **버전 차이 및 CI/CD 파이프라인 에러**를 해결하며, 문제 해결 능력을 증명.  
- 🔄 GitHub Actions를 통해 **자동 테스트 파이프라인**을 구축하고, 테스트 결과를 **리포트 아티팩트로 보관**.  
- 📊 Allure Report와 Trace Viewer를 활용해 **테스트 실패 원인 분석** 및 **디버깅 가시성**을 강화.  

---

## 🤖 AI 도구 활용

본 프로젝트는 **ChatGPT, Google Gemini, Claude** 등의 AI 도구를 적극적으로 활용했습니다.

- 📚 **학습 지원**: Playwright 및 CI/CD 설정 관련 학습 곡선을 단축.  
- ✨ **코드 품질 개선**: Locator 전략 최적화 및 리팩토링에 AI 피드백 반영.  
- 🧩 **문제 해결**: GitHub Actions에서 발생한 환경 설정 오류 해결에 AI의 조언 적용.  
- 📝 **문서화 보조**: README 및 프로젝트 구조 설명을 AI를 통해 정리.  

---

### 🛠️ 개발 환경 및 실행 방법

#### **실행 환경**

- ![Node.js](https://img.shields.io/badge/Node.js-22.19.0-339933?style=flat-square&logo=nodedotjs&logoColor=white)  
- ![Playwright](https://img.shields.io/badge/Playwright-1.55.0-2EAD33?style=flat-square&logo=playwright&logoColor=white)  
- ![Allure Report](https://img.shields.io/badge/Allure-2.24.0-FF5A5F?style=flat-square&logo=allure&logoColor=white)  
- ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI/CD-2088FF?style=flat-square&logo=githubactions&logoColor=white)  

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

📈 테스트 과정 및 결과
테스트 절차: 구글 접속 → 키워드 입력("Playwright") → 검색 결과 확인.

테스트 통과 화면: 검색 결과 첫 번째 타이틀에 "Playwright" 포함 여부 확인.

---
📸 시연 예시


<img src="https://github.com/euuuuuuan/qa-automation-playwright/blob/main/google-search-playwright-result.png" width="700px">

---
```
📂 프로젝트 구조 예시
qa-automation-playwright/
 ┣ 📂 tests                     # Playwright 자동화 테스트 코드
 ┣ 📂 docs/images               # 스크린샷 및 리포트 캡처
 ┣ playwright.config.ts         # Playwright 환경 설정
 ┣ package.json                 # 프로젝트 의존성 관리
 ┣ .github/workflows            # GitHub Actions CI/CD 설정
 ┗ README.md
```
 ---
### 🧑‍💻 개발자 정보

| 이름   | 역할               | 연락처                                                                 |
| :----- | :----------------- | :--------------------------------------------------------------------- |
| 전유안 | QA 자동화 엔지니어 | GitHub: [euuuuuuan](https://github.com/euuuuuuan)
