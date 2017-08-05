import { Ng4Course170805PPage } from './app.po';

describe('ng4-course170805-p App', () => {
  let page: Ng4Course170805PPage;

  beforeEach(() => {
    page = new Ng4Course170805PPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
