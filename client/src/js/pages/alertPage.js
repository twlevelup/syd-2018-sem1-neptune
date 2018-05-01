const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/alertPage.hbs');


class AlertPage extends BasePage {

  template() {
    const context = {
      alert: this.props.alert,
    };
    return compiledTemplate(context);
  }

  topButtonEvent() {
    this.navigate('/');
  }

}
  
  
  
module.exports = AlertPage;

