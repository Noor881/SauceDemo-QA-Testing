const { Builder, By, until } = require('selenium-webdriver');

(async function viewCartTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Step 1: Go to login page
    await driver.get('https://www.saucedemo.com/');

    // Step 2: Log in
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    // Step 3: Wait for product page
    await driver.wait(until.urlContains('inventory'), 5000);

    // Step 4: Add the first item to the cart
    await driver.findElement(By.css('button.btn_inventory')).click();

    // Step 5: Click on the cart icon
    await driver.findElement(By.className('shopping_cart_link')).click();

    // Step 6: Wait for cart page and verify item is listed
    await driver.wait(until.urlContains('cart'), 5000);
    const item = await driver.findElement(By.className('inventory_item_name'));

    const itemName = await item.getText();

    if (itemName) {
      console.log('✅ View Cart Test Passed. Item in cart:', itemName);
    } else {
      console.log('❌ View Cart Test Failed: No item found in cart.');
    }

  } catch (error) {
    console.log('❌ View Cart Test Failed:', error.message);
  } finally {
    await driver.quit();
  }
})();
