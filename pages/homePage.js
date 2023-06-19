const { Key, By, until } = require("selenium-webdriver");
let BasePage = require("./basePage");

class HomePage extends BasePage {
  pageTitle = "Home - Hudl";

  async enter_url(theURL = "https://www.hudl.com/home") {
    await this.go_to_url(theURL);
  }
}
module.exports = new HomePage();
