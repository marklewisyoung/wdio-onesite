// News Page
import ElementUtil from 'test/util/element';
import BasePage from './base.page';

const news = new ElementUtil();

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
    return news.retrievePageTitle();
  }

  clickSignUpButton() {
    return news.elementClick(this.signUpButton);
  }
}

export default new NewsPage();
