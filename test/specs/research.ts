import { assert, expect } from 'chai';
import researchPage from '../pages/researchPage';

// Login to the Research page
// Navigate to the research page
describe('Navigate to the Research page and login', function () {
  beforeEach(function () {
    researchPage.open();
    researchPage.loginNav.click();
    researchPage.researchAccountLogin.click(); // Research Login credentials box appears
    browser.pause(2000);
    // const loggedIn = researchPage.headerStatus.getText();
    // if (loggedIn === 'Account') {
    //   researchPage.logoutResearchAccount;
    // }
    // researchPage.loginWithCredentials(
    //   `youngmarklewis@gmail.com`,
    //   `Testing123!`
  });
  afterEach(function () {
    researchPage.logoutResearchAccount();
  });
  it('Confirm user is logged in using correct credentials', function () {
    researchPage.loginWithCredentials(
      `youngmarklewis@gmail.com`,
      `Testing123!`
    );
    const loginText = researchPage.headerStatus.getText();
    expect(loginText).to.equal(`Account`);
  });
  xit('Should let you logout from the research page', function () {
    researchPage.logoutResearchAccount();
    browser.pause(2000);
  });
  xit('Should not log in and error with a missing username', function () {
    researchPage.loginWithCredentials(`youngmarklewis@gmail.co`, `Testing12!`);
    const failedLoginText = researchPage.logInError.getText();
    console.log('Failed login text = ' + failedLoginText);
  });
  xit('Should not log in and error with a missing password', function () {});
});

// [0-0] 2021-01-09T17:28:20.851Z ERROR webdriver: Request failed with status 400 due to element click intercepted: element click intercepted: Element <span>...</span> is not clickable at point (1047, 40). Other element would receive the click: <div aria-modal="true" class="css-cxr37u" role="dialog">...</div>

// should let you log in

// should error with a missing username

// should error with a missing password

// research account login

// webbroker login - assert
