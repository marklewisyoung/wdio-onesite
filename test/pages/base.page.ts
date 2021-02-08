// Base page to test super constructor
//const { URL } = require('url')
import ElementUtil from '../util/elementUtil';

class BasePage extends ElementUtil{
  open(path) {
    browser.url(path);
  }
}

// class basePage {
//     path: any;
//     url: any;

//     constructor(path) {
//         this.path = path;

//         this.url = new URL(path, browser.config.baseUrl)
//     }
//     load() {
//         browser.url(this.path);
//     }
// }

export default BasePage;
//module.exports = Generic
