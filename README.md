# 🌐 웹 자동화 테스트 (Playwright)

---

## 🌟 프로젝트 소개
이 프로젝트는 **Playwright와 JavaScript**를 활용하여  
- 구글 검색 기능 및  
- Django 기반 이커머스 웹사이트  

의 **웹 자동화 테스트**를 수행한 포트폴리오 예제입니다.  

브라우저에서 반복적으로 수행되는 시나리오(검색, 로그인, 장바구니, 결제 등)를 자동화하여,  
QA 과정에서의 **효율성과 정확성**을 높이는 데 중점을 두었습니다.  

---

## 🚀 주요 기능
- ✅ **검색 자동화**: 구글에서 특정 키워드("Playwright")를 검색하고 첫 번째 결과 타이틀 검증  
- ✅ **로그인/로그아웃**: 테스트 계정 로그인 및 세션 검증  
- ✅ **주문 및 장바구니 관리**: 상품 담기 → 수량 변경 → 결제 → 주문 완료까지 자동화  
- ✅ **크로스 브라우저 지원**: Chromium, Firefox, WebKit 등 다양한 브라우저 환경에서 동일한 테스트 실행  
- ✅ **테스트 리포트**: Playwright 기본 HTML 리포트 및 Allure 리포트를 통한 결과 시각화  

---

## 💡 기술적 성과 및 문제 해결
- 🚀 **Playwright 단기간 습득**: 웹 UI 자동화 시나리오를 빠르게 구현  
- ⚙️ **CI/CD 파이프라인 구축 (GitHub Actions)**  
  - Django 서버 실행 → 의존성 설치 → DB 마이그레이션 → 슈퍼유저 생성  
  - 자동화된 테스트 환경을 안정적으로 구성  
- 🛠️ **문제 해결 사례**
  - **구글 CAPTCHA 문제**: 초기 검색 테스트 실패 → 수동 인증 후 2개 케이스 성공 → 구글의 자동화 방지 강력함 확인  
  - **장바구니 로직 오류**: 논리적 흐름을 수정하여 정상 실행 보장  
  - **요소 검증 불안정성**: `toHaveCount(0)` 등 더 안정적인 검증 방법 적용  
  - **YAML 문법 오류**: GitHub Actions 워크플로우 파일의 들여쓰기 문제 해결  
- 📊 **테스트 가시성 강화**: Allure Report 및 Trace Viewer로 실패 원인을 상세 분석  

---

## 🤖 AI 도구 활용
본 프로젝트는 **ChatGPT, Google Gemini, Claude** 등의 AI 도구를 적극적으로 활용했습니다.

- 📚 **학습 지원**: Playwright 및 CI/CD 설정 학습 곡선을 단축  
- ✨ **코드 품질 개선**: Locator 전략 최적화 및 코드 리팩토링  
- 📝 **문서화 보조**: README, 프로젝트 구조 설명 자동화  

---

## 🛠️ 개발 환경 및 실행 방법

### ⚙️ 실행 환경

- ![Node.js](https://img.shields.io/badge/Node.js-22.19.0-339933?style=flat-square&logo=nodedotjs&logoColor=white)  
- ![Playwright](https://img.shields.io/badge/Playwright-1.55.0-2EAD33?style=flat-square&logo=playwright&logoColor=white)  
- ![Allure Report](https://img.shields.io/badge/Allure-2.34.1-FF5A5F?style=flat-square&logo=allure&logoColor=white)  
- ![Python](https://img.shields.io/badge/Python-3.13.2-3776AB?style=flat-square&logo=python&logoColor=white)  
- ![Django](https://img.shields.io/badge/Django-5.1-092E20?style=flat-square&logo=django&logoColor=white)  


### ▶ 실행 방법
1️⃣ **프로젝트 클론**

[git clone](https://github.com/euuuuuuan/qa-automation-playwright.git)

2️⃣ 의존성 설치

```
npm install
npx playwright install --with-deps
pip install -r requirements.txt   # Django 의존성
```
3️⃣ 테스트 실행

```
# Django 서버 실행 (백그라운드)
python manage.py runserver &

# Playwright 테스트 실행
npx playwright test
npx playwright test --headed   # GUI 모드 실행
```
4️⃣ 리포트 확인

```
# HTML 리포트
npx playwright show-report

# Allure 리포트
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```
📈 테스트 과정 및 결과
테스트 절차:

1) 구글 검색: "Playwright" 입력 → 첫 번째 검색 결과 확인

2) Django E2E: 로그인 → 상품 상세 이동 → 장바구니 담기 → 수량 변경 → 결제 및 주문 완료 → 장바구니 비우기

실행 결과:

구글 검색: 초기 3가지 케이스 실패 → CAPTCHA 수동 인증 후 2개 성공

Django E2E: 자동화 테스트 환경에서 모든 시나리오 정상 통과
---

## 📈 구글검색 테스트 과정 및 결과
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
├── 📂 .github/               # GitHub Actions 워크플로우 파일
├── 📂 allure-report/         # Allure 리포트 HTML 파일
├── 📂 allure-results/        # Allure 리포트 생성용 데이터
├── 📂 docs/                  # 문서 및 스크린샷
│   └── screenshots/
├── node_modules/             # Node.js 패키지
├── playwright-report/        # Playwright 기본 HTML 리포트
├── test-results/             # 실패한 테스트 결과 (트레이스, 스크린샷)
├── 📂 tests/                 # 실제 테스트 파일 (.spec.js)
│   ├── google-search.spec.js
│   └── login.spec.js
├── 📂 tests-examples/        # Playwright 공식 예제 테스트 파일
│   └── demo-todo-app.spec.js
├── .gitignore                # Git 추적 제외 파일
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
