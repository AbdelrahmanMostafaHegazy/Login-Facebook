const { By, until } = require("selenium-webdriver");
const { Builder } = require("selenium-webdriver");

(async function () {
    // Initializing the WebDriver instance
    const driver = new Builder().forBrowser('chrome').build();
    try {
        // Navigating to Facebook
        await driver.get('http://www.facebook.com');

        // Locating email, password, and login button elements
        const emailField = await driver.findElement(By.id('email'));
        const passwordField = await driver.findElement(By.id('pass'));
        const loginButton = await driver.findElement(By.name('login'));

        // Entering credentials and submitting the form
        await emailField.sendKeys('Username');
        await passwordField.sendKeys('password');
        await loginButton.click();

        // Waiting until the URL contains 'Facebook'
        await driver.wait(until.urlContains('Facebook'), 8000000);

        // Logging success message
        console.log(`login success`);
    } catch (error) {
        // Handling errors
        console.error(`an error occurred`, error);
    } finally {
        // Quitting the WebDriver instance
        await driver.quit();
    }
})();
