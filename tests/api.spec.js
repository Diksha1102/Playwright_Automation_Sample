// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../swaglabs_pom/pageobject_login');

//data read declaratrion
const testdata1 = require('../test_data/test2.json');


//API get 
testdata1.forEach((testdata) =>
     { 
    test('Get call for user - '+testdata.username, {
     tag:['@smoke','@login', '@e2e']
     },async ({ page, request }) => {
     
        const products = await request.get('http://34.45.142.80:8180/api/catalogue-rest/product/15');
        //Response headers
        console.log(products);
        //Response body
        console.log(await products.json());


       //Response Call 
        let email = Math.random().toString(36).substring(2, 12)+ "@nomail.com";
        let password = "qwerty";
 
        const registerUserResponse = await request.post(`http://34.45.142.80:8180/api/customer-rest/customer/register`, {
            data: {
              "err": "",
              "firstName": "Diksha",
              "lastName": "Bajaj",
              "email": email, 
              "password": "qwerty",
              "confirmpassword": "qwerty"
          }
        });

//ADO--- YML --- HTML reports ----Pipeline jobs ---- Git

//Matching conditions --- JSON comparision 
        expect (await registerUserResponse.json()).toMatchObject(
        {
            "id": expect.any(Number),
            "firstName": "Diksha",
              "lastName": "Bajaj",
              "email": email, 
              "password": "password",
        }
        )

     //STatus code
        expect (registerUserResponse.status());
        //STatus text string value
        expect (registerUserResponse.statusText());
// get body to validate
        expect (registerUserResponse.json());

        // condition to only display only true if false it will fail
        expect (registerUserResponse.ok()).toBeTruthy();

        //validate the value 
        expect (registerUserResponse.status()).toEqual(404);

        console.log(registerUserResponse)
        console.log(await registerUserResponse.json())

   });
   });

   /*const { request } = require('playwright');
 
(async () => {
  // Create a new APIRequestContext instance
  const apiContext = await request.newContext();
 
  // Perform GET request
  const response = await apiContext.get('http://34.45.142.80:8180/api/catalogue-rest/product/15');
 
  // Log response status
  console.log(`Response status: ${response.status()}`);
 
  // Log response body
  const responseBody = await response.json();
  console.log(responseBody);
 
  // Dispose of the APIRequestContext instance
  await apiContext.dispose();
})();*/
  
  // Separate Post call code
testdata1.forEach((testdata) =>
    { 
   test('Post call for user - '+testdata.username, {
    tag:['@smoke','@login', '@e2e']
    },async ({ page, request }) => {


        let email =  Math.random().toString(36).substring(2, 12)+ "@nomail.com";
    
        const registerUserResponse = await request.post(`http://34.45.142.80:8180/api/customer-rest/customer/register`, {
            data: {
              "err": "",
              "firstName": "Diksha",
              "lastName": "Bajaj",
              "email": email,
              "password": "qwerty",
              "confirmpassword": "qwerty"
          }
        });
});
});


//Validation 
// 1st = Response Status code, status = ok , Internal server error
// 2nd = Valid the data, Contract, Valid data with DB or API
// 3rd = Headers or others as part of reponse