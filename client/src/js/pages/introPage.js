require('../../styles/pages/intro.scss');
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/introPage.hbs')

class IntroPage extends BasePage {
  template() {
    return compiledTemplate();
  }

  topButtonEvent() {
    this.navigate('/');
  }

  bottomButtonEvent() {
    this.navigate('details');
  }

  rightButtonEvent() {
    this.navigate('emergencyContacts');
  }

  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = IntroPage;
