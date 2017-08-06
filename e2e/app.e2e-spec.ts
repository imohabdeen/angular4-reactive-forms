import { Angular4ReactiveFormsPage } from './app.po';

describe('angular4-reactive-forms App', () => {
  let page: Angular4ReactiveFormsPage;

  beforeEach(() => {
    page = new Angular4ReactiveFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
