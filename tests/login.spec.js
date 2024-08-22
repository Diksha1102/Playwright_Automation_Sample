// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../swaglabs_pom/pageobject_login');

//data read declaratrion
const testdata1 = require('../test_data/test2.json');


//API get 
testdata1.forEach((testdata) =>
     { 
    test('Login User with API - '+testdata.username, {
     tag:['@smoke','@login', '@e2e']
     },async ({ page, request }) => {

       //Response Call 
        let email = Math.random().toString(36).substring(2, 12)+ "@nomail.com";
        let password = "qwerty";
 
        const registerUserResponse = await request.post(`http://34.45.142.80:8180/api/customer-rest/customer/register`, {
            data: {
              "err": "",
              "firstName": "Diksha",
              "lastName": "Bajaj",
              "email": email, 
              "password": password,
              "confirmpassword": password
          }

         
        });

        console.log(email);


        //login

        const loginUser =  await request.post('http://34.45.142.80:8180/api/customer-rest/customer/login',{

          data: {
            "email": email, 
            "password": password     
        }
        })
      console.log(await loginUser.json());

   });
   });



   //Mock API's
   // 
