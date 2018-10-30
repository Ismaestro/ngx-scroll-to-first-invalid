import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getForm() {
    return element(by.css('form')).getText();
  }
}
