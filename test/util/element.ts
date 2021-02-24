 class ElementUtil {
   
    elementClick(element) {
        element.waitForDisplayed();
        element.click();
    }

    elementSetValue(element, value) {
        element.waitForDisplayed();
        element.setValue(value);
    }

    elementGetText(element) {
        element.waitForDisplayed();
        return element.getText();
    }

    elementIsDisplayed(element) {
        element.waitForDisplayed();
        return element.isDisplayed();
    }

    retrievePageTitle() {
        return browser.getTitle();
    }

    retrievePageUrl() {
        return browser.getUrl();
    }

}

export default ElementUtil;