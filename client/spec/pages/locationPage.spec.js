const LocationPage = require('../../src/js/pages/locationPage');
describe('ContactsPage', () => {
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
