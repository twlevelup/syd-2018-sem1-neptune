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
      expect(page.template()).toContain("<h1>Current Location</h1>");
    });
  });

  describe('#template', () => {
    it('should have a template that displays the current location', () => {
      const props = { location: '50 Carrington St'};
      const page = new LocationPage(props);
      expect(page.template()).toContain("<h2>50 Carrington St</h2>");
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new LocationPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

});
