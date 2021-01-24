import { assert, expect } from 'chai';
import researchPage from '../pages/researchPage';

// Login to the Research page
// Navigate to the research page
describe('Navigate to the Research page and login', function () {
  beforeEach(function () {
    researchPage.open();
    researchPage.loginNav.click();
    researchPage.researchAccountLogin.click(); // Research Login credentials box appears
  });
  // afterEach(function () {
  //   researchPage.logoutResearchAccount();
  // });
  it('Confirm user is logged in using correct credentials', function () {
    researchPage.loginWithCredentials(
      `youngmarklewis@gmail.com`,
      `Testing123!`
    );
    const loginText = researchPage.headerStatus.getText();
    expect(loginText).to.equal(`Account`);
    researchPage.logoutResearchAccount();
  });
  xit('Test', function () {
    // researchPage.logoutResearchAccount();
    // browser.pause(2000);
  });
  it('Should not log in and error with an incorrect credentials', function () {
    researchPage.loginWithCredentials(`testemail2@gmail.com`, `Testing123!`);
    researchPage.incorrectEmailPassword.waitForDisplayed();
    const failedLoginText = researchPage.incorrectEmailPassword.getText();
    expect(failedLoginText).to.equal(`WRONG EMAIL OR PASSWORD.`);
    console.log('Failed login text = ' + failedLoginText);
    browser.back();
    
  });
  xit('Should not log in and error with a missing password', function () {});
});

// [0-0] 2021-01-09T17:28:20.851Z ERROR webdriver: Request failed with status 400 due to element click intercepted: element click intercepted: Element <span>...</span> is not clickable at point (1047, 40). Other element would receive the click: <div aria-modal="true" class="css-cxr37u" role="dialog">...</div>

// should let you log in

// should error with a missing username

// should error with a missing password

// research account login

// webbroker login - assert
