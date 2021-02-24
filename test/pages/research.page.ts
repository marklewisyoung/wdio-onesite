import BasePage from './base.page';

class ResearchPage extends BasePage {
  constructor() {
    super('https://research.ii.co.uk/');
  }
  // Method to login to research
  loginWithCredentials(username, password) {
    this.username.waitForDisplayed();
    this.username.addValue(username);
    this.password.waitForDisplayed();
    this.password.addValue(password);
    this.loginButton.waitForDisplayed();
    this.loginButton.click();
  }
  // Method to logout of research
  logoutResearchAccount() {
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
    return $(`//span[text()="Research log out"]`);
  }
  get headerStatus() {
    return $(`//span[text()="Account"]`);
  }
  get incorrectEmailPassword() {
    return $(`//span[text()="Wrong email or password."]`);
  }
  get blankEmailEntered() {
    return $(`#auth0-lock-error-msg-email .auth0-lock-error-invalid-hint`);
  }
  get blankPasswordEntered() {
    return $(`#auth0-lock-error-msg-password .auth0-lock-error-invalid-hint`);
  }
  // .animated.fadeInUp>Span
  // //span[text()="Wrong email or password."]
  // #auth0-lock-error-msg-email .auth0-lock-error-invalid-hint
  // #auth0-lock-error-msg-password .auth0-lock-error-invalid-hint
}

export default new ResearchPage();
