const LocationPage = require('../../src/js/pages/locationPage');

describe('LocationPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new LocationPage();
      expect(page.template()).toContain("<h1>Your location is</h1>");
    });
  });

  describe('#template', () => {
    it('should have a template that displays the current location', () => {
      const page = new LocationPage();
      expect(page.template()).toContain("<h1>50 Carrington St, NSW 2000</h1>");
    });
  });

  describe('#topButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new LocationPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

});
