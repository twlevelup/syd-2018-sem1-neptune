const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/detailsPage.hbs')

class DetailsPage extends BasePage {
  template() {
    return compiledTemplate();
  }
}

module.exports = DetailsPage;
