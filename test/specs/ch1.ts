import { expect } from 'chai';

/* Create a new test case that does the following steps:
1. navigates to http://richersounds.com - DONE
2. capture the page title using the browser object and store it in a variable - DONE
3. Assert the page title using the expect method from the chai library - DONE
4. ensure the title matches the following text : "Richer Sounds - The UK's Hi-Fi, Home Cinema & TV Specialists!" - DONE
*/

describe('Richer Sounds home page', () => {
  it('Checking the page title is correct', () => {
    browser.url('http://richersounds.com');
    const title = browser.getTitle(); // Save getTitle in const title
    console.log('Page Title = ' + title); // Print to console
    expect(title).to.equal(
      `Richer Sounds - The UK's Hi-Fi, Home Cinema & TV Specialists!`
    );
    //
  });
});
// (2/2)
