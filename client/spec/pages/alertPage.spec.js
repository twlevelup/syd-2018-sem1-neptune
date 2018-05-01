const AlertPage = require('../../src/js/pages/alertPage');

describe('AlertPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new AlertPage();
      expect(page.template()).toContain("<h1>This is the alert page.</h1>");
    });
  });

  describe('#template', () => {
    it('should have a template that displays the alert page.', () => {
      const page = new AlertPage();
      expect(page.template()).toContain("<h1>This is alert number 1.</h1>");
    });
  });

  describe('#topButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new AlertPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

});
