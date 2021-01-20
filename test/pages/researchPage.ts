import Page from './basePage';

class researchPage extends Page {
  open() {
    super.open(`https://research.ii.co.uk/`);
  }

  loginWithCredentials(username, password) { // Method to login to research
    this.username.waitForDisplayed();
    this.username.addValue(username);
    this.password.waitForDisplayed();
    this.password.addValue(password);
    this.loginButton.waitForDisplayed();
    this.loginButton.click();
  }

  logoutResearchAccount() { // Method to logout of research
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
  get loginErrorMessage() {
    return $(`//span[text()="Wrong email or password."]`);
  }
  get headerStatus() {
    return $(`//span[text()="Account"]`);
  }
  get logInError() {
    return $('//span[text()="Wrong email or password."]');
  }

  // These were meant to be part of the super constructor inheriting from the base page. I will give you 1 of the 2 marks but strictly speaking
  // you haven;t done what the test asked you to do
}

export default new researchPage();
