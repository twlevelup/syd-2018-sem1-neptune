const AlertNotification = require('./notifications/AlertNotification');
const ReminderNotification = require('./notifications/ReminderNotification');


const notifications = [   
  {
    type: "medAlert",
    label: "Medication",
    defaultValue: "Oroxine 100ug",
    view: AlertNotification,
  },
  {
    type: "base",
    label: "Base",
    defaultValue: "This is a test hello notification",
  },
  {
    type: "reminder",
    label: "Reminder",
    defaultValue: "",
    view: ReminderNotification,
  },
];

module.exports = notifications;
