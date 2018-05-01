const QuotesPage = require('../../src/js/pages/quotesPage');

describe('The Quotes Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new QuotesPage();
      expect(page.template()).toContain(`When all else fails, take a nap`);
      expect(page.template()).toContain(`Home`);
      expect(page.template()).toContain(`Next`);
      expect(page.template()).toContain(`Back`);
    });
  });

  describe('#topButtonEvent', () => {
    it('should take the user to the home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new QuotesPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#leftButtonEvent', () => {
    it('should take the user to the previous page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new QuotesPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

});
