const CarerContactPage = require('../../src/js/pages/carerContactPage');

describe('The Carer Contacts Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the carer\'s name', () => {
      const page = new CarerContactPage();
      expect(page.template()).toContain(`Carer:`);
    });

    it('should contain the carer\'s mobile', () => {
      const page = new CarerContactPage();
      expect(page.template()).toContain(`Mobile:`);
    });
  });

  describe('#topButtonEvent', () => {
    it('should take the user to the home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new CarerContactPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});