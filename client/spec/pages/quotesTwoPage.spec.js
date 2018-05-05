const QuotesTwoPage = require('../../src/js/pages/quotesTwoPage');

describe('The Quotes Two Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new QuotesTwoPage();
      expect(page.template()).toContain(`Tough times never last, but tough people do.`);
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

      const page = new QuotesTwoPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#rightButtonEvent', () => {
    it('should take the user to the next quotes page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new QuotesTwoPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('quotesThree');
    });
    });

  describe('#leftButtonEvent', () => {
    it('should take the user to the previous page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new QuotesTwoPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('quotes');
    });
  });

});