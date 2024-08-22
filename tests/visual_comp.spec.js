import { test, expect } from '@playwright/test';
const { LoginPageObject } = require('../swaglabs_pom/pageobject_login');




  test('Comparing base and actual image', async ({ page, request }) => {

    // Go to the page
    await page.goto('https://www.boots.com/sitesearch?searchTerm=iphone');
    //await page.pause();
  
    await expect(page.locator(".global-footer")).toHaveScreenshot();

    //--- npx playwright test --headed -g "Comparing base and actual image" --project=chromium --update-snapshots
  
    
  });





