const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.txtUserName = page.getByPlaceholder("Username");
    this.txtPassword = page.getByPlaceholder("Password");
    this.btnLogin = page.getByRole('button',{name: 'LOGIN'});

    
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/v1/');
  }

  /*async user_enters_username() {
    await page.txtUserName.fill("standard_user");
  }*/

  async user_enters_username(strUsername) {
    await page.txtUserName.fill(strUsername);
  }

  async user_enters_password(strPassword) {
    await page.txtPassword.fill(strPassword);
  }

  async user_clicks_on_Login() {
    await page.btnLogin.click();
  }
};