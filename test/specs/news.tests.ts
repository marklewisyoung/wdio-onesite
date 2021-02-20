import NewsPage from '../pages/news.page';
//import constants from '../util/constants'; // Check this
import { assert, expect } from 'chai';

describe('ii News Page Tests', function () {
  before(function () {
    NewsPage.load();
  });
  it('verify page title is correct', function () {
    const title = NewsPage.getPageTitle();
    console.log('page title is:', title);
    assert.equal(
      'Latest Stock Market News & Analysis - interactive investor',
      title,
      'title is not found'
    );
  });
  it('Must click the free sign-up button', function () {
    NewsPage.clickSignUpButton();
    browser.pause(2000);
  });
});
