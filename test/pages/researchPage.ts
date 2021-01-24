import Page from './basePage';

class researchPage extends Page {
  open() {
    super.open(`https://research.ii.co.uk/`);
  }

  loginWithCredentials(username, password) {
    // Method to login to research
    this.username.waitForDisplayed();
    this.username.addValue(username);
    this.password.waitForDisplayed();
    this.password.addValue(password);
    this.loginButton.waitForDisplayed();
    this.loginButton.click();
  }

  logoutResearchAccount() {
    // Method to logout of research
    this.headerStatus.waitForDisplayed();
    this.headerStatus.click();
    this.logoutResearchButton.waitForDisplayed();
    this.logoutResearchButton.click();
  }

  get loginNav() {
    return $(`//span[text()="Log in"]`);
  }
  get researchAccountLogin() {
    return $(`//span[text()="research account login"]`);
  }
  get username() {
    return $(`//input[@name="email"]`);
  }
  get password() {
    return $(`//input[@name="password"]`);
  }
  get loginButton() {
    return $(`//button[@type="submit"]`);
  }
  get logoutResearchButton() {
    return $('//span[text()="Research log out"]');
  }
  get headerStatus() {
    return $(`//span[text()="Account"]`);
  }
  get incorrectEmailPassword() {
    return $('.animated.fadeInUp>span');
  }
  get blankEmailEntered() {
    return $('');
  }
  get blankPasswordEntered() {
    return $('');
  }
  // .animated.fadeInUp>Span
  // //span[text()="Wrong email or password."
  // #auth0-lock-error-msg-email .auth0-lock-error-invalid-hint
  // #auth0-lock-error-msg-password .auth0-lock-error-invalid-hint

  // These were meant to be part of the super constructor inheriting from the base page. I will give you 1 of the 2 marks but strictly speaking
  // you haven't done what the test asked you to do
}

export default new researchPage();
