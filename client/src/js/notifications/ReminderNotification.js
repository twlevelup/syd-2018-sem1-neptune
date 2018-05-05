require('../../styles/pages/remindersNotification.scss');

const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;
const compiledTemplate = require("../../templates/ReminderNotification.hbs");
const notifications = require("../notifications.js");

module.exports = class ReminderNotification extends BaseNotification {
  template() {
    const context = {
      message: this.props.message
    };
    return compiledTemplate(context);
  }

  rightButtonEvent() {
    const localStorage = this.localStorage.getItem('reminders');
    const existingReminders = localStorage ? JSON.parse(localStorage) : [];
    this.localStorage.setItem('reminders', JSON.stringify([
      ...existingReminders,
      this.props.message,
    ]));
    NotificationHub.hide();
  }

  faceButtonEvent() {

  }


};