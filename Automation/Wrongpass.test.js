const { Builder, By, until } = require('selenium-webdriver');

(async function loginWrongPasswordShouldPassTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.saucedemo.com/');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('wrong_password');
    await driver.findElement(By.id('login-button')).click();

    // ❌ Wrong expectation: we assume login succeeds
    await driver.wait(until.urlContains('inventory'), 5000);
    console.log('❌ Test Failed: Logged in with wrong password!');

  } catch (error) {
    console.log('✅ Test Passed: Login with wrong password failed as expected');
  } finally {
    await driver.quit();
  }
})();
