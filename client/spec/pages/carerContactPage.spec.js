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
      expect(page.template()).toContain(`Your Carer's name: James Grant`);
      expect(page.template()).toContain(`Your Carer's Mobile: 0432 141 567`);
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

  describe('#rightButtonEvent', () => {
    it('should take the user to the relative contact details page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new CarerContactPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('relativeContactDetails');
    });
  });
});