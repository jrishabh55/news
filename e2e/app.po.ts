import {browser, by, element} from 'protractor';

export class StaticPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jnex-root h1')).getText();
  }
}
