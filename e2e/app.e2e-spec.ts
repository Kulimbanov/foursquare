import { FoursquarePage } from './app.po';

describe('foursquare App', () => {
  let page: FoursquarePage;

  beforeEach(() => {
    page = new FoursquarePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
