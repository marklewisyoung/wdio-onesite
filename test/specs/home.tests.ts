//import { expect as chaiExpect } from 'chai';
import { assert, expect } from 'chai';
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
  // Working on this
  it('Check page title is correct ', function () {
    const title = HomePage.getPageTitle();
    console.log(title);
    // expect(title).to.equal(
    //   'interactive investor – the UK’s number one flat-fee investment platform'
    // ); // This also works
    assert.equal(
      constants.homePageTitleText,
      title,
      'title is not found'
    );
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
  // Test Playground
  xit('Get links from parent', function () {
    HomePage.clickServicesDropDown;
    const parentLinks = HomePage.textElementsServicesMenu;
    console.log('The LINKS =', parentLinks);
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
