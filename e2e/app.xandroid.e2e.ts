import { Angular2MdlPage } from './app.po';

// exluded from android because: The requested command is currently not yet supported by selendroid. getCssValue
describe('angular2-mdl App', function() {
  let page: Angular2MdlPage;

  beforeEach(() => {
    page = new Angular2MdlPage();
  });

  it('should have primary dark background color', () => {
    page.navigateTo();
    expect(page.getHeadlineElement().getCssValue('background-color')).toEqual('rgba(25, 118, 210, 1)');
  })


});