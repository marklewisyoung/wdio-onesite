import Page from './BasePage';

class LoginPage extends Page {
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
    return $(`//*[@id="site-modal-container"]/div/div/div/div[1]/p[2]/button`);
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

  // (1/2)
  // These were meant to be part of the super constructor inheriting from the base page. I will give you 1 of the 2 marks but strictly speaking
  // you haven;t done what the test asked you to do

  //get loginErrorMessage() { return $('span*=Wrong email or password.'); } // Behaves weirdly in QA, test in Live
}

export default new LoginPage();
