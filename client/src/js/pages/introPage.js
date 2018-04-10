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
}

module.exports = IntroPage;
