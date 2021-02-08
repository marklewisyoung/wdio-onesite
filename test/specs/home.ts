import { expect as chaiExpect } from 'chai';
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
    const iiHomePageTitle = chaiExpect(browser.getTitle()).equals(
      'interactive investor – the UK’s number one flat-fee investment platform'
    );
  });
  it('Check page url is correct', function () {
    const iiHomePageURL = chaiExpect(browser.getUrl()).equals(
      'https://www.ii.co.uk/'
    );
  });
  xit('Check page header is correct', function () {
    const iiHomePageHeader = $(
      'img[alt="Welcome to interactive investor"]'
    ).getAttribute('text');
    console.log('Header text = ' + iiHomePageHeader);
    // Revisit this
    chaiExpect(iiHomePageHeader).equals('Welcome to interactive investor');
  });
  xit('Get all links (href) in the services menu and assert they are correct', function () {
    iiHomePage.clickServicesDropDown.click();
    const links = $$('.css-1gypnlj>div>a');
    const urls = links.map((link) => link.getAttribute('href'));

    //urls.forEach(url => {
    console.log(urls);
    //});
    //});

    // iiHomePage.urlsFromServicesMenuArray;
    // const servicesArrayA = iiHomePage.urlsFromServicesMenuArray;
    // console.log(servicesArrayA);

    // chaiExpect(servicesArrayA).to.deep.equal([
    //   'https://www.ii.co.uk/ii-accounts/trading-account',
    //   'https://www.ii.co.uk/ii-accounts/isa',
    //   'https://www.ii.co.uk/ii-accounts/sipp',
    //   'https://www.ii.co.uk/ii-accounts/isa/junior-isa',
    //   'https://www.ii.co.uk/ii-accounts',
    //   'https://www.ii.co.uk/our-charges',
    //   'https://www.ii.co.uk/investing-with-ii',
    //   'https://www.ii.co.uk/investing-with-ii/transferring-to-ii',
    //   'https://www.ii.co.uk/investing-with-ii/international-investing',
    //   'https://www.ii.co.uk/investing-with-ii/regular-investing',
    //   'https://www.ii.co.uk/live-pricing',
    //   'https://www.ii.co.uk/ipos',
    //   'https://www.ii.co.uk/ethical-investing',
    // ]);
  });
  // 4. SPLIT - THIS WORKS!!
  xit('Get all links (text) in the services menu and assert they are correct SPLIT', function () {
    iiHomePage.clickServicesDropDown.click();
    const servicesArray = iiHomePage.textElementsFromServicesSplit;
    chaiExpect(servicesArray).to.deep.equal([
      'Our Accounts',
      'Trading Account',
      'Stocks and Shares ISA',
      'SIPP',
      'Junior ISA',
      'See all ii Accounts',
      'Investing',
      'Our Charges',
      'Investing with ii',
      'Transferring to ii',
      'International Investing',
      'Regular Investing',
      'Live Pricing',
      'IPOs',
      'Ethical Investing',
    ]);
  });
  // 5. MAP - THIS WORKS!!
  xit('Get all links (text) in the services menu and assert they are correct MAP', function () {
    iiHomePage.clickServicesDropDown.click();
    console.log(iiHomePage.textElementsFromServicesMap());
  });
  // 6. MAP - THIS WORKS!!
  it('Get all links (Href) in the services menu and assert they are correct MAP', function () {
    iiHomePage.clickServicesDropDown.click();
    console.log(iiHomePage.aElementsFromServicesMap());
  });
  xit('Should let you click the Login button', function () {
    iiHomePage.mainLogin.click();

    browser.pause(2000);
  });
});

// //'span[contains(@class, "name of Text")]']

//     let mainLogin = $('span=Log in');
//     mainLogin.click();
//     let researchNavButton = $('[title="Research Account Log In"]');

//     researchNavButton.waitForExist();
//     researchNavButton.click();
//     browser.pause(2000);

//     let researchAccountLogin = $('//span[text()="Log in"]');
//     //researchAccountLogin.scrollIntoView();
//       researchAccountLogin.isClickable();
//       browser.waitUntil(() => researchAccountLogin.isClickable())
//     //browser.pause(2000);
