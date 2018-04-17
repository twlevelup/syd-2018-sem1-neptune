const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/locationPage.hbs')

class LocationPage extends BasePage {

    constructor(props = {}) {
        super(props);
        this.contacts = props.contacts || [
          { name: 'Sam', phoneNumber: '0431 123 333' },
          { name: 'Sinan', phoneNumber: '0431 222 222' },
          { name: 'Jafari', phoneNumber: '0431 333 333' },
        ];
      }
    
      template() {
        const context = {
          contacts: this.contacts,
        };
        return compiledTemplate(context);
      }
    
      rightButtonEvent() {
        this.navigate('/');
      }
    
    }
    
    
    
module.exports = LocationPage;

