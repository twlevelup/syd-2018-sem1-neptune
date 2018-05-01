const AlertNotification = require('./notifications/AlertNotification');

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
  }
];

module.exports = notifications;
