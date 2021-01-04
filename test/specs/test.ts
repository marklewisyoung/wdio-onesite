import { expect } from 'chai';

describe('Richer Sounds home page', () => {
  it('Checking the page title is correct', () => {
    browser.url('http://richersounds.com');
    const title = browser.getTitle();
    console.log('Page Title = ' + title);
    expect(title).to.equal(
      `Richer Sounds - The UK's Hi-Fi, Home Cinema & TV Specialists!`
    );
  });
});
