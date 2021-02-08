// Utilities 

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

    elementGetPageTitle() {
        return browser.getTitle();
    }

}

export default ElementUtil;