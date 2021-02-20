import { assert, expect } from 'chai';
import ResearchPage from '../pages/research.page';

// Login to the Research page
// Navigate to the research page
describe('Navigate to the Research page and login', function () {
  beforeEach(function () {
    ResearchPage.load();
    ResearchPage.loginNav.click();
    ResearchPage.researchAccountLogin.click(); // Research Login credentials box appears
  });
  // afterEach(function () {
  //   ResearchPage.logoutResearchAccount();
  // });
  it('Confirm user is logged in using correct credentials', function () {
    ResearchPage.loginWithCredentials(
      `youngmarklewis@gmail.com`,
      `Testing123!`
    );
    const loginText = ResearchPage.headerStatus.getText();
    expect(loginText).to.equal(`Account`);
    ResearchPage.logoutResearchAccount();
  });
  xit('Test', function () {
    // ResearchPage.logoutResearchAccount();

  });
  it('Should not log in and error with an incorrect credentials', function () {
    ResearchPage.loginWithCredentials(`testemail3@gmail.com`, `Testing123!`);
    ResearchPage.incorrectEmailPassword.waitForDisplayed();
    const failedLoginText = ResearchPage.incorrectEmailPassword.getText();
    expect(failedLoginText).to.equal(`WRONG EMAIL OR PASSWORD.`);
    //browser.back();
  });
  it('Should not log in and error with a missing email', function () {
    ResearchPage.loginWithCredentials(
      ``,
      `Testing123`
    );
    ResearchPage.blankEmailEntered.waitForDisplayed();
    const missingEmail = ResearchPage.blankEmailEntered.getText();
    console.log('Error Message = ' + missingEmail);
    expect(missingEmail).to.equal(`Can't be blank`)

  });
  it('Should not log in and error with a missing password', function () {
    ResearchPage.loginWithCredentials(
      `youngmarklewis@gmail.com`,
      ``
    );
    ResearchPage.blankPasswordEntered.waitForDisplayed();
    const missingPassword = ResearchPage.blankPasswordEntered.getText();
    expect(missingPassword).to.equal(`Can't be blank`)
  });
});


// should let you log in

// should error with a missing username

// should error with a missing password

// research account login

// webbroker login - assert
