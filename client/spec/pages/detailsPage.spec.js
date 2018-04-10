const DetailsPage = require('../../src/js/pages/detailsPage');

describe('The Details Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new DetailsPage();
      expect(page.template()).toContain(`Name: Carl`);
      expect(page.template()).toContain(`Add: 123 Pet Street`);
      expect(page.template()).toContain(`D.O.B.: 14/02/1957`);
      expect(page.template()).toContain(`Emergency`);
      expect(page.template()).toContain(`Name: Bruce Wayne`);
      expect(page.template()).toContain(`Add: 1007 Mountain Drive, Gotham`);
      expect(page.template()).toContain(`Number: SOMEBODY-CALL-911`);
    });
  });

  describe('#topButtonEvent', () => {
    it('should take the user to the home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new DetailsPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});