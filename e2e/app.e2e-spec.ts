import { EvaporateAngularPage } from './app.po';

describe('evaporate-angular App', function() {
  let page: EvaporateAngularPage;

  beforeEach(() => {
    page = new EvaporateAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
