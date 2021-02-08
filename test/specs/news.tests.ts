// News Tests

import NewsPage from '../pages/news.page';
//import constants from '../util/constants'; // Check this
import { assert, expect } from 'chai';

describe('ii News Page Tests', function () {
  it('verify page title is correct', function () {
    NewsPage.open();
    //browser.maximizeWindow();
    const title = NewsPage.getPageTitle();
    console.log('page title is:', title);
    assert.equal(
      'Latest Stock Market News & Analysis - interactive investor',
      title,
      'title is not found'
    );
  });

  it('Must click the sign-in button', function () {
    NewsPage.clickSignUpButton();
  });
});
