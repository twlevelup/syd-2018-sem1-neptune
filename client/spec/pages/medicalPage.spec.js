const MedicalPage = require('../../src/js/pages/medicalPage');

describe('The Medical ID Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new MedicalPage();
      expect(page.template()).toContain(`<p>Medical Condition:`);
      expect(page.template()).toContain(`<p>Allergies:`);
      expect(page.template()).toContain(`Home`);
      expect(page.template()).toContain(`Back`);
      expect(page.template()).toContain(`More`);
    });
  });

  describe('#topButtonEvent', () => {
    it('should take the user to the home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new MedicalPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#rightButtonEvent', () => {
    it('should take the user to the medication page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new MedicalPage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('medication');
    });
  });

  describe('#leftButtonEvent', () => {
    it('should take the user back to the details page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new MedicalPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('details');
    });
  });
});