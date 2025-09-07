// // tests/login.spec.js
// import { test } from '@playwright/test';
// import credentials from '../credentials.json'; // 중요! 별도의 파일에 ID와 PW를 저장.

// test('로그인 세션 저장', async ({ page }) => {
//   await page.goto('https://accounts.google.com/');

//   // ID 입력
//   await page.locator('input[type="email"]').fill(credentials.username);
//   await page.locator('div[id="identifierNext"]').click();

//   // 비밀번호 입력 전에 2초 지연 시간 추가 (권장)
//   await page.waitForTimeout(2000); 

//   // 비밀번호 입력
//   await page.locator('input[type="password"]').fill(credentials.password);
//   await page.locator('div[id="passwordNext"]').click();

//   // 로그인 완료될 때까지 대기.
//   await page.waitForURL('https://myaccount.google.com/');

//   // 로그인 상태(세션)를 auth.json 파일에 저장합니다.
//   await page.context().storageState({ path: 'auth.json' });
//   console.log('로그인 세션이 auth.json에 성공적으로 저장되었습니다.');
// });