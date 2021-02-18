import BasePage from './base.page';

class iiHomePage extends BasePage {
  // open() {
  //   super.open('./');
  // }
  constructor() {
    super('./')
  }

  // Accept Cookies
  get acceptCookies() {
    return $('//span[text()="Accept"]');
  }
  // Click services dropdown 
  get clickServicesDropDown() {
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
