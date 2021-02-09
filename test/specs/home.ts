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
  xit('Check page header is correct', function () {
    const iiHomePageHeader = $(
      'img[alt="Welcome to interactive investor"]'
    ).getAttribute('text');
    console.log('Header text = ' + iiHomePageHeader);
    // Revisit this
    expect(iiHomePageHeader).equals('Welcome to interactive investor');
  });
  // 4. SPLIT - THIS WORKS!!
  xit('Get all links (text) in the services menu and assert they are correct SPLIT', function () {
    iiHomePage.clickServicesDropDown.click();
    const servicesArray = iiHomePage.textElementsFromServicesSplit;
    console.log('LOG!!!', iiHomePage.textElementsFromServicesSplit);
    expect(servicesArray).to.deep.equal([
      // DOES WORK WITH ASSERTION!
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
    console.log('LOG!!!', iiHomePage.textElementsFromServicesMap());
    const servicesArrayText = iiHomePage.textElementsFromServicesMap;
    expect(servicesArrayText).to.deep.equal([
      // DOESN'T WORK WITH ASSERTION
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
  });
  // REMOVE - Replace with 
  // 6. MAP - THIS WORKS!!
  xit('Get all links (Href) in the services menu and assert they are correct MAP', function () {
    iiHomePage.clickServicesDropDown.click();
    //console.log(iiHomePage.aElementsFromServicesMap());
    const servicesArrayA = iiHomePage.aElementsFromServicesMap;
    //chaiExpect(servicesArrayA).to.deep.equal DOESN'T WORK WITH ASSERTION
  });
  // 3. MAP - THIS WORKS WITH chai expect (previously chaiExpect) USE THIS
  xit('Get all links (text) in the services menu and assert they are correct MAP', function () {
    iiHomePage.clickServicesDropDown.click();
    const testMapArray = iiHomePage.childElementsArray; // childElementsArray is an array $$
    console.log(testMapArray);
    expect(testMapArray).to.eql([
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
  });
  // 3. MAP - THIS WORKS WITH chai expect (previously chaiExpect) USE THIS
  it('Should let you click the Login button', function () {
    iiHomePage.clickServicesDropDown.click();
    const testMapArrayHref = iiHomePage.hrefElementsFromServicesMap;
    console.log(testMapArrayHref);
    expect(testMapArrayHref).to.eql([
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
