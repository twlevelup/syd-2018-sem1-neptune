require('../../styles/pages/medical.scss');
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/medicalPage.hbs')

class MedicalPage extends BasePage {
  template() {
    return compiledTemplate();
  }

  topButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('medication');
  }

  leftButtonEvent() {
    this.navigate('details');
  }
}

module.exports = MedicalPage;
