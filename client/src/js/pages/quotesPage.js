require('../../styles/pages/quotes.scss');
const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/quotesPage.hbs')

class QuotesPage extends BasePage {
  template() {
    return compiledTemplate();
  }

  topButtonEvent() {
    this.navigate('/');
  }


  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = QuotesPage;
