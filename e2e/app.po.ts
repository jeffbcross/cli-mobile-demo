export class ProgressivePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('progressive-app h1')).getText();
  }
}
