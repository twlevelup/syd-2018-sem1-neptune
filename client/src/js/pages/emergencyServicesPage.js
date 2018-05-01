// require('../../styles/pages/emergencyServices.scss');
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/emergencyServicesPage.hbs')

class EmergencyServicesPage extends BasePage {
  template() {
    return compiledTemplate();
  }
}

module.exports = EmergencyServicesPage;
