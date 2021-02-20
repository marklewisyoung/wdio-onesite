// Base page / super constructor
class BasePage {
  path: any;
  constructor(path) {
    this.path = path;
  }
  load() {
    browser.url(this.path);
  }
}

export default BasePage;

//import ElementUtil from '../util/elementUtil';

//class BasePage extends ElementUtil{
//   open(path) {
//     browser.url(path);
//   }
// }
//export default class BasePage {

