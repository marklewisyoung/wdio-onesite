import { assert, expect } from 'chai';
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
      'https://www.ii.co.uk/');
  });
   xit('Check page header is correct', function () {
     const iiHomePageHeader = $('img[alt="Welcome to interactive investor"]').getAttribute('text');
     console.log('Header text = ' + iiHomePageHeader);
     // Revisit this
     expect(iiHomePageHeader).equals('Welcome to interactive investor');
   });
  it('Get all links in the services menu and assert they are correct', function () {
    iiHomePage.clickServicesDropDown.click();
    //iiHomePage.getTextForALinks;
    //iiHomePage.ChildElementsText;
    //console.log(iiHomePage.specificChildElement(2).getText());
    //iiHomePage.childElementsArray;
    //console.log(iiHomePage.childElementsinArraySplit);

    // Code to get Url's from services dropdown and print to console
    const links = $$('.css-1gypnlj>div>a');
    const urls = links.map((link) => link.getAttribute('href'));

    urls.forEach((url) => {
      console.log(url);
    });
  });
  xit('Click the links in the services menu', function () {
    iiHomePage.tradingAccountLink.click(); // Click Trading Account
    iiHomePage.verifyTradingAccount.isDisplayed();
  });
  xit('Check the elements on the ii home page', function () {
    iiHomePage.loginOverlay.getHTML();
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
