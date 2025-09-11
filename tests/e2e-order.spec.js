// tests/e2e-order.spec.js
// 로그인 및 장바구니 담기 및 결제 E2E 테스트 자동화
// 연계 프로젝트 주소 (https://github.com/euuuuuuan/clothing-mall-project)
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('상품 주문 및 장바구니 관리 전체 E2E 테스트', async ({ page }) => {

    // --- 1. 로그인 단계 ---
    await page.goto('http://127.0.0.1:8000/login/');
    console.log('로그인 페이지로 이동했습니다.');
    // // await page.pause();

    await page.fill('#id_username', 'test');
    await page.fill('#id_password', 'xptmxmdlqslek12');
    await page.click('body > div.login-container > form > button');
    
    await expect(page).toHaveURL('http://127.0.0.1:8000/');
    console.log('로그인 완료: 메인 페이지로 이동했습니다.');
    // await page.pause();

    // --- 2. 상품 상세 페이지 이동 및 장바구니 담기 ---
    await page.click('body > main > section.product-list > div > div > a > h3');
    console.log('상품 상세 페이지로 이동하겠습니다.');
    // await page.pause();

    // --- 3. 장바구니 페이지로 이동 및 총액 검증 ---
    console.log('장바구니로 이동하겠습니다.');
    await page.click('body > main > div > form > button');
    await page.click('body > header > nav > a:nth-child(3)');
    await expect(page).toHaveURL('http://127.0.0.1:8000/cart/');
    
    console.log('장바구니 페이지입니다. 수량을 변경하고 총액을 검증하겠습니다.');
    // await page.pause();

    // 장바구니 페이지에서 상품 수량 변경
    const updatedQuantity = faker.number.int({ min: 1, max: 50 });
    await page.fill('input[name="quantity"]', updatedQuantity.toString());
    await page.click('body > main > ul > li > div > form:nth-child(3) > button');
    // await page.pause();
    
    // 총액 검증
    const priceText = await page.locator('body > main > ul > li > div > p').textContent();
    const cleanPrice = parseInt(priceText.replace(/[^0-9]/g, ''));
    const expectedTotal = cleanPrice * updatedQuantity;

    const totalText = await page.locator('body > main > div > h3').textContent();
    const cleanTotal = parseInt(totalText.replace(/[^0-9]/g, ''));

    expect(cleanTotal).toBe(expectedTotal);
    console.log(`총액 검증 성공: ${expectedTotal}원.`);
    // await page.pause();

    // --- 4. 결제 및 주문 완료 ---
    console.log('결제를 진행하겠습니다.');
    await page.click('body > main > div > form > button');
    await expect(page).toHaveURL('http://127.0.0.1:8000/order-complete/');
    console.log('주문이 완료되었습니다.');
    // await page.pause();

    // --- 5. 결제 후 홈 화면 이동 검증 ---
    await page.click('body > main > a');
    await expect(page).toHaveURL('http://127.0.0.1:8000/');
    console.log('랜딩 페이지인지 검증하겠습니다.');
    // await page.pause();

    // --- 6. 장바구니 비우기 ---
    console.log('장바구니가 비워졌는지 검증하겠습니다.');
    await page.goto('http://127.0.0.1:8000/cart/');
    
    // 장바구니에 상품이 없는 상태를 확인하는 더 안정적인 방법
    const emptyCartText = page.locator('text=장바구니가 비어있습니다.');
    await expect(emptyCartText).toBeVisible({ timeout: 10000 });
    console.log('장바구니가 성공적으로 비워졌습니다.');
    // await page.pause();

    console.log('모든 테스트 시나리오가 완료되었습니다. 5초 후 종료합니다.');
    await page.waitForTimeout(5000);
});