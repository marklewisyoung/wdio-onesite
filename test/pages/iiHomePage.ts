import Page from './basePage';

class iiHomePage extends Page {
  open() {
    super.open('./');
  }

  get acceptCookies() {
    return $('//span[text()="Accept"]');
  }
  get mainLogin() {
    return $('span=Log in');
  }
  get loginOverlay() {
    return $('.css-d7smja');
  }
  get clickServicesDropDown() {
    return $('.css-hafks1 li:nth-of-type(1)');
  }
  get clickPensionsDropDown() {
    return $('.css-hafks1 li:nth-of-type(2)');
  }
  get clickResearchDropDown() {
    return $('.css-hafks1 li:nth-of-type(3)');
  }
  get servicesDropDown() {
    return $('.css-ilody5');
  }
}

export default new iiHomePage();
