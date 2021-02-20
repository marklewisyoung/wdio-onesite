// News Page
import ElementUtil from 'test/util/elementUtil';
import BasePage from './base.page';

const elementUtil = new ElementUtil();

class NewsPage extends BasePage {
  constructor() {
    super('./stock-market-news');
  }

  // Page Locators:
  get signUpButton() {
    return $(`.css-7uipeu`);
  }

  // Page Actions:
  getPageTitle() {
    return elementUtil.elementGetPageTitle();
  }

  clickSignUpButton() {
    return elementUtil.elementClick(this.signUpButton);
  }
}

export default new NewsPage;
