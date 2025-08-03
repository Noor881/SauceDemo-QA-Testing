const { Builder, By, until } = require('selenium-webdriver');

(async function removeItemFromCartTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Step 1: Go to login page
    await driver.get('https://www.saucedemo.com/');

    // Step 2: Log in
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    // Step 3: Wait for products to load
    await driver.wait(until.urlContains('inventory'), 5000);

    // Step 4: Add first item to cart
    await driver.findElement(By.css('button.btn_inventory')).click();

    // Step 5: Go to cart
    await driver.findElement(By.className('shopping_cart_link')).click();
    await driver.wait(until.urlContains('cart'), 5000);

    // Step 6: Remove item
    await driver.findElement(By.css('button.cart_button')).click();

    // Step 7: Verify item removed
    let items = await driver.findElements(By.className('cart_item'));

    if (items.length === 0) {
      console.log('✅ Remove Item Test Passed: Cart is empty');
    } else {
      console.log('❌ Remove Item Test Failed: Item still in cart');
    }

  } catch (error) {
    console.log('❌ Remove Item Test Failed:', error.message);
  } finally {
    await driver.quit();
  }
})();
