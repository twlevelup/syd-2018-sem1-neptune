const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/reminderPage.hbs')

class ReminderPage extends BasePage {
  template() {
    const context = {
      reminders: JSON.parse(this.localStorage.getItem('reminders'))
    }
    return compiledTemplate(context);
  }

  topButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('reminderTwo')
  }

  rightButtonEvent() {
    
  }

}

module.exports = ReminderPage;
