const ReminderPage = require('../../src/js/pages/reminderPage');

describe('The Reminder Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const localStorage = {
        getItem: () => JSON.stringify(["Doctors Appointment - 4:30 PM"])
      }
      const page = new ReminderPage({localStorage});
      expect(page.template()).toContain(`Reminders`);
      expect(page.template()).toContain(`Doctors Appointment - 4:30 PM`);
    });
  });

  describe('#topButtonEvent', () => {
    it('should take the user to the home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new ReminderPage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#leftButtonEvent', () => {
    it('should take the user to the previous page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new ReminderPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('reminderTwo');
    });
  });
});