require('../../styles/pages/carerContact.scss');
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/carerContactPage.hbs')

class CarerContactPage extends BasePage {
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

module.exports = CarerContactPage;
