import { QuestionsAppPage } from './app.po';

describe('questions-app App', () => {
  let page: QuestionsAppPage;

  beforeEach(() => {
    page = new QuestionsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
