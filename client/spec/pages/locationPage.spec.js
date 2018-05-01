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
      expect(page.template()).toContain("Your location is");
    });
  });

  describe('#template', () => {
    it('should have a template that displays the current location', () => {
      const page = new LocationPage();
      expect(page.template()).toContain("50 Carrington St, Sydney NSW 2000");
    });
  }); 

  describe('#template', () => {
    it('should have a template that displays the a \'Home\' button', () => {
      const page = new LocationPage();
      expect(page.template()).toContain("Home");
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
