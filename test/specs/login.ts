import { assert, expect } from 'chai';
import LoginPage from '../pages/LogInPage';

// Login to the Research page
// Navigate to the research page
describe('Navigate to the Research page and login', function () {
  it('Should let you navigate to the login page', function () {
    LoginPage.open();
    LoginPage.loginNav.click();
    LoginPage.researchAccountLogin.click();
    browser.pause(2000); // use browser.waitUntil rather than pause
    LoginPage.loginWithCredentials(`youngmarklewis@gmail.com`, `Testing123!`);
  });
  it('Confirm user is logged in', () => {
    const headerStatus = $(`//span[text()="Account"]`).getText(); // - This should be part of the login page object
    console.log(
      'Logged in! Header is showing: ' + headerStatus + ", previously Log In' "
    );
    expect(headerStatus).to.equal(`Account`);
  });
});

// [0-0] 2021-01-09T17:28:20.851Z ERROR webdriver: Request failed with status 400 due to element click intercepted: element click intercepted: Element <span>...</span> is not clickable at point (1047, 40). Other element would receive the click: <div aria-modal="true" class="css-cxr37u" role="dialog">...</div>

// should let you log in

// should error with a missing username

// should error with a missing password
