import { ProgressivePage } from './app.po';

describe('progressive App', function() {
  let page: ProgressivePage;

  beforeEach(() => {
    page = new ProgressivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('progressive works!');
  });
});
