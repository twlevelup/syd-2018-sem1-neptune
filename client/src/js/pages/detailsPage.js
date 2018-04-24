require('../../styles/pages/details.scss');
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/detailsPage.hbs')

class DetailsPage extends BasePage {
  template() {
    return compiledTemplate();
  }

  topButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('/medicalHistory');
  }

  leftButtonEvent() {
    this.navigate('intro');
  }
}

module.exports = DetailsPage;
