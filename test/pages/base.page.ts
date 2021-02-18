// Base page to test super constructor

//import ElementUtil from '../util/elementUtil';

//class BasePage extends ElementUtil{
//   open(path) {
//     browser.url(path);
//   }
// }
//export default class BasePage {

//   class BasePage {
//   locators: any;
//   constructor(locators) {
//     this.locators = locators;
//   }
//   open(path) {
//     browser.url(path);
//   }
// }

class BasePage {
  path: any;
  constructor(path) {
    this.path = path;
  }
  load() {
    browser.url(this.path)
  }
}

export default BasePage
