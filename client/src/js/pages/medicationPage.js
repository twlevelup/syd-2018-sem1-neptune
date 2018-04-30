require('../../styles/pages/medication.scss');
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/medicationPage.hbs')

class MedicationPage extends BasePage {
  template() {
    return compiledTemplate();
  }

  topButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('medical');
  }
}

module.exports = MedicationPage;
