//import { expect as chaiExpect } from 'chai';
import { assert, expect } from 'chai';
import homePage from 'test/pages/home.page';
import HomePage from 'test/pages/home.page';
import constants from 'test/util/constants';

describe('ii Home page tests', function () {
  // before(function () {
  //   HomePage.acceptCookies.click();
  // });
  before(function () {
    HomePage.load();
    HomePage.clickAcceptCookies();
  });
  it('Check page title is correct ', function () {
    const title = HomePage.getPageTitle();
    console.log(title);
    // expect(title).to.equal(
    //   'interactive investor – the UK’s number one flat-fee investment platform'
    // ); // This also works
    assert.equal(constants.homePageTitleText, title, 'title is not found');
  });
  it('Check page url is correct', function () {
    const pageUrl = HomePage.getPageUrl();
    console.log(pageUrl);
    // expect(pageUrl).equal('https://www.ii.co.uk/'); // This also works
    assert.equal(constants.homePageUrl, pageUrl, 'page url not found');
  });

  // Element Util working on THIS!
  // 1. MAP - THIS WORKS WITH chai expect USE THIS
  it('Get (text) in the services menu and assert they are correct MAP', function () {
    HomePage.clickServicesDropDown(); // Done
    const servicesMapArrayText = HomePage.textElementsServicesMenu; // childElementsArray is an array $$
    console.log(servicesMapArrayText);
    expect(servicesMapArrayText).to.eql(constants.servicesTextArray);
  });
  // 2. MAP - THIS WORKS WITH chai expect USE THIS
  it('Get all links (href) from the services menu and assert they are correct MAP', function () {
    //HomePage.clickServicesDropDown.click(); // Breaks if running full suite
    const servicesMapArrayHref = HomePage.hrefElementsServicesMenu;
    console.log(servicesMapArrayHref);
    expect(servicesMapArrayHref).to.eql(constants.servicesLinksArray);
  });

  // *****************************************************************************************************
  // Test Playground
  // Page Action to re-use map method 14/03/21 - THIS WORKS
  it.only('Test Map Text Method so that I can reuse', function () {
    HomePage.clickServicesDropDown();
    const servicesMapArrayTextt = HomePage.reuseMapServicesText();
    console.log(servicesMapArrayTextt);
    expect(servicesMapArrayTextt).to.eql(constants.servicesTextArray);
  });
  it('Test Map Link Method so that I can reuse', function () {
    HomePage.clickServicesDropDown();
    const servicesMapArrayHreff = HomePage.reuseMapServicesLink();
    console.log(servicesMapArrayHreff);
    expect(servicesMapArrayHreff).to.eql(constants.servicesLinksArray);
  });
  xit('Click on all links in an array', function () {
    //HomePage.clickServicesDropDown(); // Breaks if running full suite
    const visitEachLink = HomePage.childElements;
    visitEachLink.forEach((link) => {
      link.click();
      //browser.back();
      //HomePage.load();
      //HomePage.clickServicesDropDown();
      // 2 x for loops?
    });
  });

  // Using Move to and Wait commands
  // waitForDisplayed
  xit('Click on services drop down menu and click link', function () {
    homePage.clickServicesDropDown();
    homePage.ourCharges.waitForDisplayed({ timeout: 1000 });
    homePage.ourCharges.click();
  });
  // Using Move to and Wait commands
  // waitUntil
  xit('Click on services drop down menu and click link', function () {
    homePage.clickServicesDropDown();
    browser.pause(2000);
    browser.waitUntil(
      function () {
        return homePage.ourCharges.getText() === 'Our Charges';
      },
      { timeout: 3000, timeoutMsg: 'Text is not shown' }
    );
    //expect(homePage.ourCharges).to.eql('Our Charges');
  });
});

// //'span[contains(@class, "name of Text")]']

//     let researchNavButton = $('[title="Research Account Log In"]');

//     researchNavButton.waitForExist();
//     researchNavButton.click();
//     browser.pause(2000);

//     let researchAccountLogin = $('//span[text()="Log in"]');
