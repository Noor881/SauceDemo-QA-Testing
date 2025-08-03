const { Builder, By } = require('selenium-webdriver');

(async function removeWithoutAddTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.saucedemo.com/');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    await driver.get('https://www.saucedemo.com/cart.html');

    // Try to remove item when cart is already empty
    await driver.findElement(By.css('button.cart_button')).click();

    console.log('❌ Test Failed: Removed non-existing item');
  } catch (error) {
    console.log('✅ Test Passed: No remove button because cart is empty');
  } finally {
    await driver.quit();
  }
})();
