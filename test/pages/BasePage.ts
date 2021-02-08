class Page {
    open(path) {
        browser.url(path);
    }
}
export default Page;

// export default class BasePage {
//     locators: any;
//     constructor(locators) {
//         this.locators = locators;
//     }
// don't know why you commented this out, you were meant to use this base page as it was