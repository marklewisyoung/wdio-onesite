import BasePage from './base.page';
import ElementUtil from '../util/element';

const home = new ElementUtil();

class HomePage extends BasePage {
  constructor() {
    super('./');
  }
  // Page Locators

  // Accept Cookies
  get acceptCookies() {
    return $('//span[text()="Accept"]');
  }

  // Click services dropdown
  get servicesDropDown() {
    return $('.css-hafks1>li:nth-of-type(1)');
  }
  // Services Menu - get links in dropdown
  // 1. Using 2 methods - parent / child getters
  get parent() {
    return $('.css-1gypnlj');
  }
  get childElements() {
    return this.parent.$$('a'); //$$ Return all '<a> tag' elements from parent
  }

  // 2. Select child elements directly in services menu
  get childElementsOnly() {
    return $$('.css-1gypnlj>div>a');
  }
  get ChildElementsText() {
    return this.childElementsOnly.filter((element) => {
      console.log(element.getText());
    });
  }
  // Select a specific Element
  specificChildElement(index) {
    return this.parent.$(`a:nth-child(${index})`);
  }

  // 1. Add text to an array from services menu - .map $$
  // THIS WORKS 09/02
  get textElementsServicesMenu() {
    return this.childElementsOnly.map((element) => element.getText());
  }
  // 2. Add 'a' / 'href' links to an array from services menu - .map $$
  // THIS WORKS 09/02
  get hrefElementsServicesMenu() {
    return this.childElementsOnly.map((element) =>
      element.getAttribute('href')
    );
  }

  // Page Actions
  clickAcceptCookies() {
    return home.elementClick(this.acceptCookies);
  }

  getPageTitle() {
    return home.retrievePageTitle();
  }

  getPageUrl() {
    return home.retrievePageUrl();
  }

  clickServicesDropDown() {
    return home.elementClick(this.servicesDropDown);
  }
  getElementsfromServicesMenu() {
    return home.elementClick(this.childElements)
  }
}

export default new HomePage();
