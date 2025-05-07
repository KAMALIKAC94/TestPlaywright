import {test,expect} from "@playwright/test";
 
 
test.describe('Login Page',()=>{
 
 
test.beforeEach(async({page})=>{
 await page.goto('http://localhost:4200/login');
 
 const username=page.locator('input[name="name"]');
 await expect(username).toBeVisible();
 const password=page.locator('input[name="password"]');
 await expect(password).toBeVisible();
 const submitBtn=page.locator('button[type="submit"]');
 await expect(submitBtn).toBeVisible();
});
 
 
test('Check if username error message is display if username field is blank', async({page})=>{
       
    await page.fill('input[name="password"]','testuser');
    await page.click('button[type="submit"]');
 
    const userNameErrorMessage=page.locator('text=Username is required');
    await expect(userNameErrorMessage).toBeVisible();  
   });
 
 
   test('Check if password error message is display if password field is blank', async({page})=>{
       
    await page.fill('input[name="name"]','testuser');
    await page.click('button[type="submit"]');
 
    const passwordErrorMessage=page.locator('text=Password is required');
    await expect(passwordErrorMessage).toBeVisible();  
   });
 
/* write test if username and password are blank and click on submit button, then check if both error messages are displayed or not */
test('check if username and password error messages are given if username and password fields are blank', async ({ page }) => {
   
   
    await page.click('button[type="submit"]');
 
    const userNameErrorMessage = page.locator('text=Username is required');
    await expect(userNameErrorMessage).toBeVisible();
 
    const passwordErrorMessage = page.locator('text=Password is required');
    await expect(passwordErrorMessage).toBeVisible();
})

test('test', async ({ page }) => {
    await page.goto('http://localhost:59730/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('kaaa');
    await page.getByRole('textbox', { name: 'Enter Password' }).click();
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('password');
    await page.getByRole('textbox', { name: 'Enter Password' }).click();
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('Invalid Username or Password').click();
  });
 
});
 