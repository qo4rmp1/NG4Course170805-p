import { browser, by, element } from 'protractor';

export class Ng4Course170805PPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
