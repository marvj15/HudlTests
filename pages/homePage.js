let BasePage = require("./basePage");

class HomePage extends BasePage {
  pageTitle = "Home - Hudl";

  async enter_url(theURL = "https://www.hudl.com/home") {
    await this.go_to_url(theURL);
  }
}
module.exports = new HomePage();
