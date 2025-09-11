// tests/e2e.spec.js
// 연계 프로젝트 주소 (https://github.com/euuuuuuan/clothing-mall-project)
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('회원가입 및 로그인 전체 E2E 테스트', async ({ page }) => {
    
    // 1. 고유한 테스트 데이터 생성
    const username = faker.person.firstName() + faker.person.lastName() + faker.number.int({ min: 1, max: 10000 });
    const password = faker.internet.password();

    // --- 회원가입 단계 ---
    
    // 2. 회원가입 페이지로 이동
    await page.goto('http://127.0.0.1:8000/register/');
    console.log('회원가입 페이지로 이동했습니다. 잠시 멈춥니다.');
    // await page.pause();

    // 3. 회원가입 폼에 정보 입력
    await page.fill('#id_username', username);
    await page.fill('#id_password1', password);
    await page.fill('#id_password2', password);
    console.log('회원가입 정보가 입력되었습니다. 다음 단계로 진행해주세요.');
    // await page.pause();

    // 4. '가입하기' 버튼 클릭
    await page.click('text=가입하기');

    // 5. 회원가입 성공 후 로그인 페이지로 이동했는지 확인
    await expect(page).toHaveURL('http://127.0.0.1:8000/login/');

    // --- 로그인 단계 ---

    console.log('로그인 페이지로 이동했습니다. 잠시 멈춥니다.');
    // await page.pause();

    // 6. 로그인 폼에 정보 입력
    await page.fill('#id_username', username);
    await page.fill('#id_password', password);
    console.log('로그인 정보가 입력되었습니다. 다음 단계로 진행해주세요.');
    // await page.pause();

    // 7. '로그인' 버튼 클릭 (CSS 선택자 사용)
    await page.click('body > div.login-container > form > button');
    
    // 8. 로그인 성공 후 메인 페이지로 이동했는지 확인
    await expect(page).toHaveURL('http://127.0.0.1:8000/');
    console.log('로그인 성공! 테스트가 완료되었습니다.');

    // 9. 로그인된 랜딩 페이지를 확인할 수 있도록 5초간 대기
    console.log('로그인에 성공했습니다. 5초 후 테스트를 종료합니다.');
    await page.waitForTimeout(5000);
    console.log('테스트 완료. 브라우저를 종료합니다.');
});