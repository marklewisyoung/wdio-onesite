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

//     get h1() {
//         return $('h1').getText();
//     }
// }
