const IntroPage = require('../../src/js/pages/introPage');

describe('The Intro Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new IntroPage();
      expect(page.template()).toContain(`Hi Carl! Everything is okay.`);
      expect(page.template()).toContain(`You are just experiencing the onset of alzheimer's`);
    });
  });

  describe('#topButtonEvent', () => {
    it('should take the user to the home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new IntroPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('should take the user to the details page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new IntroPage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('details');
    });
  });

});
