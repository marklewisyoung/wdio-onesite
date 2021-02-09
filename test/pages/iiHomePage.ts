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
    return this.parent.$$('a'); //$$ Return all '<a> tag' elements from parent
  }
  get getTextForALinks() {
    return this.childElements.filter((element) => {
      console.log(element.getText());
    });
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
  specificChildElement(index) {
    return this.parent.$(`a:nth-child(${index})`);
  }

  // 3. Add 'a' links to an array from services menu - .map $$
  // THIS WORKS 09/02 - REPLACE 5. BELOW
  get childElementsArray() {
    return this.childElementsOnly.map((element) => element.getText());
  }

  // 4. Get text from links to an array from services menu- .split('\n') $
  // SPLIT THIS WORKS!
  get textElementsFromServicesSplit() {
    return this.parent.getText().split('\n');
  }
  // 5. Get text from links to an array from services menu- .map $$
  textElementsFromServicesMap() {
    const servicesMapArray: string[] = []; // define array as a string array
    this.childElementsOnly.map((element) =>
      servicesMapArray.push(element.getText())
    );
    return servicesMapArray;
  }
  // 6. Add 'a' links to an array from services menu- .map $$
  aElementsFromServicesMap() {
    const servicesMapArrayA: any[] = [];
    this.childElementsOnly.map((element) =>
      servicesMapArrayA.push(element.getAttribute('href'))
    );
    return servicesMapArrayA;
  }
  // 3. Add 'a' links to an array from services menu - .map $$
  // THIS WORKS 09/02 - REPLACE 6. ABOVE
  get hrefElementsFromServicesMap() {
    return this.childElementsOnly.map((element) =>
      element.getAttribute('href')
    );
  }
}

// ******************************

// 5. Get Text for items in services dropdown, add to array and assert they are correct
// childElementsArrayAssert() {
//   const servicesArray = [];
//   this.childElementsOnly.map((element) =>
//     servicesArray.push(element.getText(){

//     })
//   return servicesArray;
// }

export default new iiHomePage();
