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
  // Test Function to re-use map method 14/03/21
  elementTextMap = (mapElement) => {
    return mapElement.map((element) => element.getText());
  }
  elementLinkMap = (mapElement) => {
    return mapElement.map((element) => element.getAttribute('href'));
  }

}

export default ElementUtil;
