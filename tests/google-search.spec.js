// install: npm install -D @playwright/test
// 실행: npx playwright test
import { test, expect } from '@playwright/test';

test('구글 검색 테스트', async ({ page }) => {
  // 1. 구글 페이지로 이동.
  await page.goto('https://www.google.com');

  // 2. 검색창(textarea 태그의 name 속성이 'q')을 찾아 "Playwright"를 입력.
  await page.locator('textarea[name="q"]').fill('Playwright');

  // 3. 엔터 키를 누르기.
  await page.keyboard.press('Enter');

  // 4. 검색 결과에서 첫 번째 h3 태그(보통 검색 결과의 제목)가 나타날 때까지 대기.
  await page.waitForSelector('h3');

  // 5. 첫 번째 h3 태그 안의 텍스트를 가져오기.
  const firstResult = await page.locator('h3').first().textContent();

  // 6. 가져온 텍스트에 "Playwright"라는 단어가 포함되어 있는지 확인.
  expect(firstResult).toContain('Playwright');
});

// 실행 결과 리포트는 'google-search-playwright-result 첨부된 이미지 파일에서 확인이 가능하다.

// 내용:
// 1. 결과는 3가지 케이스 중에서 2가지는 성공하였다는 내용이다.
// 2. 처음 실행시에는 3가지 모두 실패했다는 내용이 확인되었다.
// 3. 'npx playwright test tests/login.spec.js --headed' 명렁어를 통해 브라우저의 작동을 확인했다.
// 4. 수동으로 CAPTCHA 인증을 진행해주어, 2가지는 패스하는 것을 확인했다.

// 결론: 구글의 자동화 보안성으로 인해 실행이 실패하는 것을 확인할 수 있다. 계정 로그인도 불가하다.