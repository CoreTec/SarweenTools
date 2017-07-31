import { STWebAppPage } from './app.po';

describe('stweb-app App', () => {
  let page: STWebAppPage;

  beforeEach(() => {
    page = new STWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
