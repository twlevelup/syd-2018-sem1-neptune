const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/locationPage.hbs')


class LocationPage extends BasePage {

  template() {
    const context = {
      location: this.props.location,
    };
    return compiledTemplate(context);
  }

  topButtonEvent() {
    this.navigate('/');
  }

}
  
  
  
module.exports = LocationPage;

