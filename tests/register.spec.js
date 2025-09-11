// tests/register.spec.js
// 회원가입 기능 테스트 자동화
// 연계 프로젝트 주소 (https://github.com/euuuuuuan/clothing-mall-project)

const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

// 회원가입 성공 케이스
test('회원가입 기능 - 성공 케이스', async ({ page }) => {
    // 1. 고유한 테스트 데이터 생성
    const username = faker.person.firstName() + faker.person.lastName(); 
    const password = faker.internet.password();

    // 2. 웹사이트 접속
    await page.goto('http://127.0.0.1:8000/register/');

    // 3. 입력 필드에 데이터 입력
    await page.fill('#id_username', username);
    await page.fill('#id_password1', password);
    await page.fill('#id_password2', password);
    
    // 4. '가입하기' 버튼 클릭
    await page.click('text=가입하기');

    // 5. 회원가입 성공 후 예상 페이지 URL 검증
    await expect(page).toHaveURL('http://127.0.0.1:8000/login/');
});

// 회원가입 실패 케이스
test('회원가입 기능 - 실패 케이스 (중복 사용자명)', async ({ page }) => {
    // 1. 테스트용 사용자 미리 회원가입
    const username = faker.person.firstName() + faker.person.lastName(); 

    await page.goto('http://127.0.0.1:8000/register/');
    await page.fill('#id_username', username);
    await page.fill('#id_password1', password);
    await page.fill('#id_password2', password);
    await page.click('text=가입하기');

    // 2. 동일한 사용자명으로 다시 회원가입 시도
    await page.goto('http://127.0.0.1:8000/register/');
    await page.fill('#id_username', username);
    await page.fill('#id_password1', password);
    await page.fill('#id_password2', password);
    await page.click('text=가입하기');
    
    // 3. 페이지에 '이미 존재하는 사용자명' 오류 메시지가 있는지 검증
    await expect(page.locator('text=이미 존재하는 사용자명입니다.')).toBeVisible();
});