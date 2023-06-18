let webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({ implicit: 10000 });

class BasePage {
  constructor() {
    this.driver = driver;
  }
  async go_to_url(theURL) {
    await driver.get(theURL);
  }
  async enterTextByCss(css, searchText) {
    await driver.findElement(By.css(css)).sendKeys(searchText);
  }
  async enterTextById(id, searchText) {
    await driver.findElement(By.id(id)).sendKeys(searchText);
  }
  async clickById(id) {
    await driver.findElement(By.id(id)).click();
  }
  async closeBrowser() {
    await driver.quit();
  }
}

module.exports = BasePage;
