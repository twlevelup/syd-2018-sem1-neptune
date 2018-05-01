const RelativeContactDetailsPage = require('../../src/js/pages/relativeContactDetailsPage');

describe('The Relative Contacts Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the son\'s name', () => {
      const page = new RelativeContactDetailsPage();
      expect(page.template()).toContain(`Your son\'s name is:`);
    });

    it('should contain the son\'s mobile', () => {
      const page = new RelativeContactDetailsPage();
      expect(page.template()).toContain(`Your son\'s Mobile number is:`);
    });
  });

  describe('#topButtonEvent', () => {
    it('should take the user to the home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new RelativeContactDetailsPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#leftButtonEvent', () => {
    it('should take the user to the carer contact details page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new RelativeContactDetailsPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('carerContact');
    });
  });
});