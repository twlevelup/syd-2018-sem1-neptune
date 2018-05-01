const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const IntroPage = require('./pages/introPage');
const DetailsPage = require('./pages/detailsPage');
const EmergencyContactsPage = require('./pages/emergencyContactsPage');
const LocationPage = require('./pages/locationPage');
const MedicalPage = require('./pages/medicalPage');
const MedicationPage = require('./pages/medicationPage');
const AlertPage = require('./pages/alertPage');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'intro': IntroPage,
  'details': DetailsPage,
  'emergencyContacts': EmergencyContactsPage,
  'location': LocationPage,
  'medical': MedicalPage,
  'medication': MedicationPage,
  'alert': AlertPage
};
