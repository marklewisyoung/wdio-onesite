import { assert, expect } from 'chai';
import researchPage from '../pages/researchPage';

// Login to the Research page
// Navigate to the research page
describe('Navigate to the Research page and login', function () {
  it('Should let you navigate to the login page', function () {
    researchPage.open();
    researchPage.loginNav.click();
    researchPage.researchAccountLogin.click();
    //browser.pause(2000); // use browser.waitUntil rather than pause
    // researchPage.loginWithCredentials.
    researchPage.loginWithCredentials(
      `youngmarklewis@gmail.com`,
      `Testing123!`
    );
  });
  it('Confirm user is logged in using correct credentials', function () {
    let loginText = researchPage.headerStatus.getText();
    expect(loginText).to.equal(`Account`);
  });
  xit('Should not log in and error with a missing username', function () {});
  xit('Should not log in and error with a missing password', function () {});
});

// [0-0] 2021-01-09T17:28:20.851Z ERROR webdriver: Request failed with status 400 due to element click intercepted: element click intercepted: Element <span>...</span> is not clickable at point (1047, 40). Other element would receive the click: <div aria-modal="true" class="css-cxr37u" role="dialog">...</div>

// should let you log in

// should error with a missing username

// should error with a missing password

// research account login

// webbroker login - assert
