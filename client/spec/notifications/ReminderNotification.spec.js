const ReminderNotification = require("../../src/js/notifications/ReminderNotification");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("RemminderNotification", () => {
  describe("#template", () => {
    it("should have a template", () => {
      const notification = new ReminderNotification();
      expect(notification.template()).toContain("Reminder:");
    });
  });

  describe("#rightButtonEvent", () => {
    it("should call local storage and append reminder", () => {
      const localStorage = {
        getItem: jest.fn().mockReturnValue(JSON.stringify(['hello'])),
        setItem: jest.fn(),
      }
      const props = {
        localStorage,
          message: 'world',
      }
      const notification = new ReminderNotification(props);
      notification.rightButtonEvent();
      expect(localStorage.getItem).toHaveBeenCalledWith('reminders');
      expect(localStorage.setItem).toHaveBeenCalledWith('reminders', JSON.stringify(['hello', 'world']));
    });
  });
});
