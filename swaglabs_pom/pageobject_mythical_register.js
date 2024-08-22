const { expect } = require('@playwright/test');

exports.RegisterPage = class RegisterPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.btn_menu = page.locator("//span[@class='MuiIconButton-label']/*[@id='menu']");
    this.lnk_login = page.locator("//span[@id='Login']");
    this.btn_register = page.getByText("Create Your E-Shop Account");
    this.txt_firstname = page.getAttribute('id'='firstName');
    
  }

  async goto() {
    await this.page.goto('http://34.45.142.80:3000/cts-shop/');
  }

  async user_enters_username(strUsername) {
    await page.txtUserName.fill(strUsername);
  }


  
}