import { expect } from 'chai';


// Login to the Research Page

// Navigate to the research page
describe('Navigate to the Research page and login', function () {
  it('Should let you navigate to the login page', function () {
    browser.maximizeWindow();
    browser.url('https://www.ii.co.uk/home');

    let cookiesClick = $(`//span[text()="Accept"]`);
    cookiesClick.click();

    let mainLogin = $('span=Log in');
    mainLogin.click();
    let researchNavButton = $('[title="Research Account Log In"]');

    researchNavButton.waitForExist();
    researchNavButton.click();
    browser.pause(2000);

    let researchAccountLogin = $('//span[text()="Log in"]');
    //researchAccountLogin.scrollIntoView();
      researchAccountLogin.isClickable();
      browser.waitUntil(() => researchAccountLogin.isClickable())
    //browser.pause(2000);
  });
});
