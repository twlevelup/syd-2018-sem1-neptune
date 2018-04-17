const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/locationPage.hbs')

class LocationPage extends BasePage {

    // constructor(props = {}) {
    //     super(props);

    //   }
    
      template() {
        return compiledTemplate();
      }
    
      rightButtonEvent() {
        this.navigate('/');
      }
    
    }
    
    
    
module.exports = LocationPage;

