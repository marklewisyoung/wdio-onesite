import { expect } from 'chai';

describe('ii homepage', () => {
  it('Checking the page title is correct', () => {
    browser.url('https://ii.co.uk');
    const title = browser.getTitle();
    console.log('Page Title = ' + title);

    expect(title).to.equal(
      'interactive investor – the UK’s number one flat-fee investment platform'
    );
  });
});
