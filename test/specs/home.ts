//import { expect as chaiExpect } from 'chai';
import { expect } from 'chai';
import iiHomePage from 'test/pages/iiHomepage';

describe('ii Home page tests', function () {
  // before(function () {
  //   iiHomePage.acceptCookies.click();
  // });
  before(function () {
    iiHomePage.open();
    //browser.maximizeWindow();
    iiHomePage.acceptCookies.click();
  });
  it('Check page title is correct ', function () {
    const iiHomePageTitle = expect(browser.getTitle()).equals(
      'interactive investor – the UK’s number one flat-fee investment platform'
    );
  });
  it('Check page url is correct', function () {
    const iiHomePageURL = expect(browser.getUrl()).equals(
      'https://www.ii.co.uk/'
    );
  });
  it('Get links from parent', function () {
    iiHomePage.clickServicesDropDown.click();
    const parentLinks = iiHomePage.parent.getText();
    console.log('The LINKS =', parentLinks);
  });
  // 1. MAP - THIS WORKS WITH chai expect USE THIS
  xit('Get (text) in the services menu and assert they are correct MAP', function () {
    iiHomePage.clickServicesDropDown.click();
    const servicesMapArrayText = iiHomePage.textElementsServicesMenu; // childElementsArray is an array $$
    console.log(servicesMapArrayText);
    expect(servicesMapArrayText).to.eql([
      // DOES WORK WITH ASSERTION!
      'Trading Account',
      'Stocks and Shares ISA',
      'SIPP',
      'Junior ISA',
      'See all ii Accounts',
      'Our Charges',
      'Investing with ii',
      'Transferring to ii',
      'International Investing',
      'Regular Investing',
      'Live Pricing',
      'IPOs',
      'Ethical Investing',
    ]);
    browser.pause(3000);
  });
  // 2. MAP - THIS WORKS WITH chai expect USE THIS
  xit('Get all links (href) from the services menu and assert they are correct MAP', function () {
    //iiHomePage.clickServicesDropDown.click(); // Breaks if running full suite
    const servicesMapArrayHref = iiHomePage.hrefElementsServicesMenu;
    console.log(servicesMapArrayHref);
    expect(servicesMapArrayHref).to.eql([
      // DOES WORK WITH ASSERTION!
      'https://www.ii.co.uk/ii-accounts/trading-account',
      'https://www.ii.co.uk/ii-accounts/isa',
      'https://www.ii.co.uk/ii-accounts/sipp',
      'https://www.ii.co.uk/ii-accounts/isa/junior-isa',
      'https://www.ii.co.uk/ii-accounts',
      'https://www.ii.co.uk/our-charges',
      'https://www.ii.co.uk/investing-with-ii',
      'https://www.ii.co.uk/investing-with-ii/transferring-to-ii',
      'https://www.ii.co.uk/investing-with-ii/international-investing',
      'https://www.ii.co.uk/investing-with-ii/regular-investing',
      'https://www.ii.co.uk/live-pricing',
      'https://www.ii.co.uk/ipos',
      'https://www.ii.co.uk/ethical-investing',
    ]);
  });
});

// //'span[contains(@class, "name of Text")]']

//     let researchNavButton = $('[title="Research Account Log In"]');

//     researchNavButton.waitForExist();
//     researchNavButton.click();
//     browser.pause(2000);

//     let researchAccountLogin = $('//span[text()="Log in"]');
//     //researchAccountLogin.scrollIntoView();
//       researchAccountLogin.isClickable();
//       browser.waitUntil(() => researchAccountLogin.isClickable())
//     //browser.pause(2000);
