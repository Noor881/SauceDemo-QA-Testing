const { Builder, By, until } = require('selenium-webdriver');

(async function addToCartTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Step 1: Go to login page
    await driver.get('https://www.saucedemo.com/');

    // Step 2: Log in
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    // Step 3: Wait for inventory page
    await driver.wait(until.urlContains('inventory'), 5000);

    // Step 4: Add first item to cart
    await driver.findElement(By.css('button.btn_inventory')).click();

    // Step 5: Check the cart badge shows 1
    const badge = await driver.findElement(By.className('shopping_cart_badge'));
    const itemCount = await badge.getText();

    if (itemCount === '1') {
      console.log('✅ Add to Cart Test Passed');
    } else {
      console.log('❌ Add to Cart Test Failed: Cart badge shows', itemCount);
    }

  } catch (error) {
    console.log('❌ Add to Cart Test Failed:', error.message);
  } finally {
    await driver.quit();
  }
})();
