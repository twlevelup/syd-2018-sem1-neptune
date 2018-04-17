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

    // it('should have a template with current location', () => {
    //   const location = [
    //     {name: 'hi', phoneNumber: '1234'},
    //   ];
    //   const props = { contacts }
    //   const page = new ContactsPage(props);
    //   expect(page.template()).toContain("<span>Name: hi</span>");
    //   expect(page.template()).toContain("<span>Phone: 1234</span>");
    // });
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
