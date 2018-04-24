const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/locationPage.hbs')


class LocationPage extends BasePage {

  faceButtonEvent() {
    this.navigate('location', { 
      location: "50 Carrington St" });
  }

  template() {
    const context = {
      location: this.props.location,
    };
    return compiledTemplate(context);
  }

  rightButtonEvent() {
    this.navigate('/');
  }



}
  
  
  
module.exports = LocationPage;

