require('../../styles/pages/relativeContactDetails.scss');
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/relativeContactDetailsPage.hbs')

class RelativeContactDetailsPage extends BasePage {
  template() {
    return compiledTemplate();
  }

  topButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('carerContact');
  }

  rightButtonEvent() {
    this.navigate('emergencyServices');
  }

}

module.exports = RelativeContactDetailsPage;
