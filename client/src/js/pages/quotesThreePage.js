const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/quotesThreePage.hbs')

class QuotesThreePage extends BasePage {
  template() {
    return compiledTemplate();
  }

  topButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('quotesTwo');
  }
}

module.exports = QuotesThreePage;
