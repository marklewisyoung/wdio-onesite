import Page from './basePage';

class researchPage extends Page {
  open() {
    super.open(`https://research.ii.co.uk/`);
  }

  loginWithCredentials(username, password) {
    this.username.addValue(username);
    this.password.addValue(password);
    this.loginButton.waitForDisplayed();
    this.loginButton.click();
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
  get loginErrorMessage() {
    return $(`//span[text()="Wrong email or password."]`);
  }
  get headerStatus() {
    return $(`//span[text()="Account"]`);
  }

  // These were meant to be part of the super constructor inheriting from the base page. I will give you 1 of the 2 marks but strictly speaking
  // you haven;t done what the test asked you to do
}

export default new researchPage();
