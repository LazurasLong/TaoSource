import { OdicforcePage } from './app.po';

describe('odicforce App', function() {
  let page: OdicforcePage;

  beforeEach(() => {
    page = new OdicforcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
