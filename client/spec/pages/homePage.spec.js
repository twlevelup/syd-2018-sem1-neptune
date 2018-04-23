const HomePage = require('../../src/js/pages/homePage');

describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new HomePage();
      expect(page.template()).toContain("<div>\"What you believe you can achieve\"</div>");
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to location page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('location');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to contacts page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('contacts');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('should take the user to the intro page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('intro');
    });
  });

  describe('#topButtonEvent', () => {
    it('scrolls page up', () => {
      const page = new HomePage({ watchFace });

      page.topButtonEvent();

      expect(watchFace.scrollTop).toEqual(-40);
    });
  });
});
