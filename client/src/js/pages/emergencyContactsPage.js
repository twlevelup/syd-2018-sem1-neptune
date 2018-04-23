require('../../styles/pages/emergencyContacts.scss');
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/emergencyContactsPage.hbs')

class EmergencyContactsPage extends BasePage {
  template() {
    return compiledTemplate();
  }

  topButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('intro');
  }

  rightButtonEvent() {
    this.navigate('emergencyMore');
  }
}

module.exports = EmergencyContactsPage;
