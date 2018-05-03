const EmergencyServicesPage = require('../../src/js/pages/emergencyServicesPage');

describe('The Emergency Service Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new EmergencyServicesPage();
      expect(page.template()).toContain(`Police: 000`);
      expect(page.template()).toContain(`Hospital: 0292617777`);
    });
});
});