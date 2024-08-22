// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../swaglabs_pom/pageobject_login');

//data read declaratrion
const testdata1 = require('../test_data/test2.json');


//will run for 3 names -- JSON (Key value pair) Array 
/*[
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'locked_out_user', password: 'secret_sauce' },
  { username: 'Charlie', password: 'secret_sauce' },
].forEach(({ username, password }) => {*/
//verify execution for 3 names

//read test data from another file --- test2 (json)
testdata1.forEach(({ username, password }) => {
 test('verify execution for 3 names - '+username, {
  tag:'@smoke',
  },async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.user_enters_username(username);

  await loginPage.user_enters_password(password);

  await loginPage.user_clicks_on_Login();

  //////////non parameter
  //await page.locator("").fill(username);

});
});

//testdata just used for parameter variable passing all data here
testdata1.forEach((testdata) => { 
  test('verify execution for 3 names with variable - '+testdata.username, {
   tag:'@smoke',
   },async ({ page }) => {
   const loginPage = new LoginPage(page);
 
   await loginPage.goto();
 
   await loginPage.user_enters_username(testdata.username);
 
   await loginPage.user_enters_password(testdata.password);
 
   await loginPage.user_clicks_on_Login();
 
   //////////non parameter
   //await page.locator("").fill(username);
 
 });
 });



//locators


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});





test('verify locked out user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  //await page.goto('https://www.saucedemo.com/v1/');

  await loginPage.goto();


  //await page.getByPlaceholder("Username").fill("locked_out_user");

  //await loginPage.user_enters_username();

  /////////// parameter value 
  // await loginPage.user_enters_username("locked_out_user");

  let username = "locked_out_user";

  await loginPage.user_enters_username(username);

  //await page.getByPlaceholder("Password").fill("secret_sauce");

  await loginPage.user_enters_password();

  //await (page.getByRole('button',{name: 'LOGIN'})).click();

  await loginPage.user_clicks_on_Login();

  await (page.getByRole('button',{name: 'error-button'})).isVisible();

  let error_txt = await (page.getByRole('button',{name: 'error-button'})).innerText();

  console.log(error_txt);

  await page.getByText("")
 
  //await page.locator("//h3/button").getByText;
 
});



test('verify logged in user to add in cart', async ({ page }) => {


  await page.goto('https://www.saucedemo.com/v1/');

  await page.getByPlaceholder("Username").fill("standard_user");

  await page.getByPlaceholder("Password").fill("secret_sauce");

  await (page.getByRole('button',{name: 'LOGIN'})).click();

  
  await expect(page.getByText('Products')).toBeVisible();

  await page.locator("//*[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']//button[text()='ADD TO CART']").click();

  await page.locator("//a[@class='shopping_cart_link fa-layers fa-fw']").click();

  await (page.getByRole('button',{name: 'CHECKOUT'})).click();

  await page.getByPlaceholder("First Name").fill("diksha");

  await page.getByPlaceholder("Last Name").fill("bajaj");

  await page.getByPlaceholder("Zip/Postal Code").fill("411028");

  await (page.getByRole('button',{name: 'CONTINUE'})).click();

  await (page.getByRole('button',{name: 'FINISH'})).click();

  await expect(page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })).toBeVisible();
 
});



test('User remove the product', async ({ page }) => {


  await page.goto('https://www.saucedemo.com/v1/');

  await page.getByPlaceholder("Username").fill("standard_user");

  await page.getByPlaceholder("Password").fill("secret_sauce");

  await (page.getByRole('button',{name: 'LOGIN'})).click();

  
  await expect(page.getByText('Products')).toBeVisible();

  await page.locator("//*[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']//button[text()='ADD TO CART']").click();

  await page.locator("//a[@class='shopping_cart_link fa-layers fa-fw']").click();

  await page.locator("//a[@class='shopping_cart_link fa-layers fa-fw']//span").isVisible();

  await (page.getByRole('button',{name: 'REMOVE'})).click();

  await page.locator("//a[@class='shopping_cart_link fa-layers fa-fw']//span").isHidden();

});




test('Verify cart products 3 to 2', async ({ page }) => {


  await page.goto('https://www.saucedemo.com/v1/');

  await page.getByPlaceholder("Username").fill("standard_user");

  await page.getByPlaceholder("Password").fill("secret_sauce");

  await (page.getByRole('button',{name: 'LOGIN'})).click();

  await expect(page.getByText('Products')).toBeVisible();

  await page.locator("//*[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']//button[text()='ADD TO CART']").click();

  await page.locator("//*[text()='Sauce Labs Bike Light']/ancestor::div[@class='inventory_item']//button[text()='ADD TO CART']").click();

  await page.locator("//*[text()='Sauce Labs Bolt T-Shirt']/ancestor::div[@class='inventory_item']//button[text()='ADD TO CART']").click();

  await page.locator("//a[@class='shopping_cart_link fa-layers fa-fw']").click();

  let count_three = await page.locator("//a[@class='shopping_cart_link fa-layers fa-fw']//span").innerText();

  console.log(count_three);

  await page.locator("//*[text()='Sauce Labs Backpack']").isVisible();

  await page.locator("//*[text()='Sauce Labs Bike Light']").isVisible();

  await page.locator("//*[text()='Sauce Labs Bolt T-Shirt']").isVisible();

  await page.locator("//*[text()='Sauce Labs Bolt T-Shirt']/ancestor::div[@class='cart_item']//button[text()='REMOVE']").click();

  await page.locator("//*[text()='Sauce Labs Bolt T-Shirt']").isHidden();

  //User assertion

  let count_two = await page.locator("//a[@class='shopping_cart_link fa-layers fa-fw']//span").innerText();

  console.log(count_two);
  
});



/////