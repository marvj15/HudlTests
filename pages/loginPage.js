const { Key, By, until } = require("selenium-webdriver");
let BasePage = require("./basePage");

class LoginPage extends BasePage {
  async enter_url(
    theURL = "https://www.hudl.com/login?utm_content=hudl_primary&utm_source=www.hudl.com&utm_medium=login_dropdown&utm_campaign=platform_logins"
  ) {
    await this.go_to_url(theURL);
  }

  async login(email, password) {
    let emailId = "email";
    let passwordId = "password";
    let submitButtonId = "logIn";

    await this.driver.findElement(By.id(emailId)).sendKeys(email);
    await this.driver.findElement(By.id(passwordId)).sendKeys(password);
    await this.driver.findElement(By.id(submitButtonId)).click();
    await this.driver.sleep(500);
  }

  async errorMessageVisible() {
    let errorDiv = '[data-qa-id="error-display"]';

    await this.driver.sleep(500);
    let error = await this.driver.findElement(By.css(errorDiv));
    return await error.isDisplayed();
  }
}
module.exports = new LoginPage();
