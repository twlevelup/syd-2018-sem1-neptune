const MedicationPage = require('../../src/js/pages/medicationPage');

describe('The Medication Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new MedicationPage();
      expect(page.template()).toContain(`MEDICATION:`);
      expect(page.template()).toContain(`OROXINE`);
      expect(page.template()).toContain(`FLUTIFORM`);
    });
  });

  describe('#topButtonEvent', () => {
    it('should take the user to the home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new MedicationPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#leftButtonEvent', () => {
    it('should take the user back to the medical ID page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new MedicationPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('medical');
    });
  });
});