const EmergencyContactsPage = require('../../src/js/pages/emergencyContactsPage');

describe('The Emergency Contacts Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new EmergencyContactsPage();
      expect(page.template()).toContain(`<div class="middle"><p>Carer: James McArthur</p><p>Mobile: </p></div>`);
    });
  });

  describe('#topButtonEvent', () => {
    it('should take the user to the home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new EmergencyContactsPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});