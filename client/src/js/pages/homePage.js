require('../../styles/pages/home.scss');

const BasePage = require('watch-framework').BasePage;
const logo = require('../../images/logo.png')
const time = new Date(Date.now()).toLocaleString('en-AEST', { hour12: true }).split(",")[1];
const compiledTemplate = require("../../templates/homePage.hbs");

class HomePage extends BasePage {
  template() {
    const context = {
      time: time,
      rightButtonLabel: 'Next',
      bottomButtonLabel: 'My Details',
      leftButtonLabel: 'Location',
    };
    return compiledTemplate(context);
  }

  leftButtonEvent() {
    this.navigate('location');
  }

  rightButtonEvent() {
    this.navigate('contacts');
  }

  topButtonEvent() {
    this.navigate('alert');
  }

  bottomButtonEvent() {
    this.navigate('intro');
  }
}

module.exports = HomePage;
