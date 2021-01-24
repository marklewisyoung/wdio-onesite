import { assert, expect } from 'chai';
import researchPage from '../pages/researchPage';

// Login to the Research page
// Navigate to the research page
describe('Navigate to the Research page and login', function () {
  beforeEach(function () {
    researchPage.open();
    researchPage.loginNav.click();
    researchPage.researchAccountLogin.click(); // Research Login credentials box appears

    // const loggedIn = researchPage.headerStatus.getText();
    // if (loggedIn === 'Account') {
    //   researchPage.logoutResearchAccount;
    // }
  });
  afterEach(function () { // Add condition for after each?
    researchPage.logoutResearchAccount();
  });
  xit('Confirm user is logged in using correct credentials', function () {
    researchPage.loginWithCredentials(
      `youngmarklewis@gmail.com`,
      `Testing123!`
    );
    const loginText = researchPage.headerStatus.getText();
    expect(loginText).to.equal(`Account`);
  });
  xit('Test', function () {
    // researchPage.logoutResearchAccount();
    // browser.pause(2000);
  });
  it('Should not log in and error with an incorrect username', function () {
    researchPage.loginWithCredentials(`testemail@gmail.com`, `Testing123!`);
    researchPage.incorrectEmailPassword.isDisplayed();
    const failedLoginText = researchPage.incorrectEmailPassword.getText();
    expect(failedLoginText).to.equal(`Wrong email or password.`);
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
