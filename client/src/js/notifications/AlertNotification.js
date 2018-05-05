const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;
const compiledTemplate = require("../../templates/AlertNotification.hbs");
const notifications = require("../notifications.js");

module.exports = class AlertNotification extends BaseNotification {
  template() {
    const context = {
      message: this.props.message

    };
    return compiledTemplate(context);
  }

  leftButtonEvent() {
    console.log("LEFT");
    NotificationHub.hide();
  }


  faceButtonEvent() {
    console.log("face pressed, snooze for 10 seconds!");
    NotificationHub.hide();
    setTimeout(() => {
      console.log("snoozing");
      NotificationHub.show(
        "medAlert", {message: this.props.message}
      );
    }, 10000);
  }

};