require("dotenv").config();
const loginPage = require("../pages/loginPage");
let assert = require("assert");

describe("Hudl Login Tests", function () {
  this.timeout(50000);

  this.beforeEach(function () {});

  it("Correct email and password", async function () {
    let email = process.env.TEST_EMAIL;
    let password = process.env.TEST_PASSWORD;

    await loginPage.enter_url();
    await loginPage.login(email, password);
    assert.equal(await loginPage.driver.getTitle(), "Log In");
  });

  it("Incorrect email and password", async function () {
    let email = process.env.TEST_EMAIL_INCORRECT;
    let password = process.env.TEST_PASSWORD_INCORRECT;

    await loginPage.enter_url();
    await loginPage.login(email, password);
    assert.equal(await loginPage.errorMessageVisible(), true);
  });

  it("Correct email and incorrect password", async function () {
    let email = process.env.TEST_EMAIL;
    let password = process.env.TEST_PASSWORD_INCORRECT;

    await loginPage.enter_url();
    await loginPage.login(email, password);
    assert.equal(await loginPage.errorMessageVisible(), true);
  });

  it("Incorrect email and correct password", async function () {
    let email = process.env.TEST_EMAIL_INCORRECT;
    let password = process.env.TEST_PASSWORD;

    await loginPage.enter_url();
    await loginPage.login(email, password);
    assert.equal(await loginPage.errorMessageVisible(), true);
  });

  it("No email and no password", async function () {
    let email = "";
    let password = "";

    await loginPage.enter_url();
    await loginPage.login(email, password);
    assert.equal(await loginPage.errorMessageVisible(), true);
  });

  it("No email and correct password", async function () {
    let email = "";
    let password = process.env.TEST_PASSWORD;

    await loginPage.enter_url();
    await loginPage.login(email, password);
    assert.equal(await loginPage.errorMessageVisible(), true);
  });

  it("Correct email and no password", async function () {
    let email = process.env.TEST_EMAIL;
    let password = "";

    await loginPage.enter_url();
    await loginPage.login(email, password);
    assert.equal(await loginPage.errorMessageVisible(), true);
  });

  this.afterAll(async function () {
    await loginPage.closeBrowser();
  });
});
