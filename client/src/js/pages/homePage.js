require('../../styles/pages/home.scss');

const BasePage = require('watch-framework').BasePage;
const logo = require('../../images/logo.png')
const time = new Date(Date.now()).toLocaleString('en-AEST', { hour12: true }).split(",")[1];
const compiledTemplate = require("../../templates/homePage.hbs");


class HomePage extends BasePage {
  template() {
    const context = {
      time: time,
      rightButtonLabel: 'Happy Thoughts',
      bottomButtonLabel: 'Need help?',
      leftButtonLabel: 'My Location',
      quote: "What you believe you can achieve",
    };
    return compiledTemplate(context);
  }

  leftButtonEvent() {
    this.navigate('location');
  }

  rightButtonEvent() {
    this.navigate('quotes');
  }

  topButtonEvent() {
    this.navigate('reminder')
  }

  bottomButtonEvent() {
    this.navigate('intro');
  }
}

module.exports = HomePage;
