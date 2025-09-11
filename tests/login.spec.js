// tests/login.spec.js
// ...
test('로그인 실패 케이스 (잘못된 비밀번호)', async ({ page }) => {
    await page.goto('http://127.0.0.1:8000/login/');

    // 잘못된 정보 입력
    await page.fill('#id_username', 'testuser');
    await page.fill('#id_password', 'wrong_password');
    await page.click('text=로그인');

    await page.pause(); 
});