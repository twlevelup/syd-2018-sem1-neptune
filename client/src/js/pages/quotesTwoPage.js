const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/quotesTwoPage.hbs')

class QuotesTwoPage extends BasePage {
  template() {
    return compiledTemplate();
  }

  topButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
      this.navigate('quotesThree')
  }

  leftButtonEvent() {
    this.navigate('quotes');
  }
}

module.exports = QuotesTwoPage;
