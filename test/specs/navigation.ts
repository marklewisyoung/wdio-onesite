import { expect } from 'chai';

describe('Homepage', function () {
  it('should load properly', function () {
    // Load the page
    browser.url('https://ii.co.uk');
    const browserTitle = browser.getTitle();
    //console.log('This is my browser title' + browserTitle);
    

    // Get the title of the homepage, should be interactive investor – the UK’s number one flat-fee investment platform
    expect(browser.getTitle).to.equal('interactive investor – the UK’s number one flat-fee investment platform');
  });
});
