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
  //Instance of Services
  // servicesMenu() {
  //   this.clickServicesDropDown.waitForDisplayed();
  //   this.clickServicesDropDown.click();
  //   this.tradingAccountLink.click();
  // }

  // Services Elements
  get clickServicesDropDown() {
    return $('.css-hafks1>li:nth-of-type(1)');
  }
  get servicesDropDown() {
    return $('.css-1gypnlj');
  }
  get tradingAccountLink() {
    return $('//a[@title="Trading Account"]');
  }
  get tradingPageText() {
    return $('//strong[text()="Free Trading Account"]');
  }
  get verifyTradingAccount() {
    return $('h1.Free Trading Account'); //change this!
  }

  // Get <a> elements and loop through
  // 1. Using 2 methods - parent / child getters
  get parent() {
    return $('.css-1gypnlj');
    // '.css-1gypnlj>div:nth-of-type(1)'
  }
  get childElements() {
    return this.parent.$$('a'); //$$ Find '<a> tag' elements from parent
  }
  get getTextForALinks() {
    return this.childElements.filter((element) => {
      console.log(element.getText());
    });
  }
  // 2. Select child elements directly
  get childElementsOnly() {
    return $$('.css-1gypnlj>div>a');
  }
  get ChildElementsText() {
    return this.childElementsOnly.filter((element) => {
      console.log(element.getText());
    });
  }
  specificChildElement(index) {
    return this.parent.$(`a:nth-child(${index})`);
  }

  // 3. Add 'a' links to an array - .map
  get childElementsArray() {
    return this.childElementsOnly.map((element) => {
      console.log(element.getText());
    });
  }
  // 4. Add 'a' links to an array - .split('\n')
  get childElementsinArraySplit() {
    return this.parent.getText().split('\n');
  }
  // Check for broken links in services menu
  
  // ******************************
  // ******************************

  // Pensions Elements
  get clickPensionsDropDown() {
    return $('.css-hafks1 li:nth-of-type(2)');
  }
  // Research Elements
  get clickResearchDropDown() {
    return $('.css-hafks1 li:nth-of-type(3)');
  }
}

export default new iiHomePage();
