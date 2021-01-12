import { assert, expect } from 'chai';
import iihomepage from 'test/pages/iihomepage';
import iiHomePage from 'test/pages/iihomepage';

describe('ii Home page tests', function () {
  beforeEach(function () {
    iiHomePage.open();
    iiHomePage.acceptCookies.click();
  });
  xit('Should let you click the Login button', function () {
    iiHomePage.mainLogin.click();

    browser.pause(2000);
  });
  xit('Check the elements on the ii home page', function () {
    iiHomePage.loginOverlay.getHTML();
  });
  it('Check all dropdown menu items are present on the Services menu', function () {
    iiHomePage.clickServicesDropDown.click();
    browser.pause(2000);
    iihomepage.clickPensionsDropDown.click();
    browser.pause(2000);
    iiHomePage.servicesDropDown.getHTML();
  
    
  });
});

// browser.maximizeWindow();
//     browser.url('https://www.ii.co.uk/home');

//     let acceptCookies = $(`//span[text()="Accept"]`);
//     acceptCookies.click();

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
