const routes = require('../src/js/routes');

describe('routes', () => {

  it('all routes should exist', () => {
    expect(routes['/']).toBeDefined();
    expect(routes['contacts']).toBeDefined();
    expect(routes['team']).toBeDefined();
    expect(routes['404']).toBeDefined();
    expect(routes['intro']).toBeDefined();
    expect(routes['details']).toBeDefined();
    expect(routes['medicalHistory']).toBeDefined();
    expect(routes['emergencyContacts']).toBeDefined();
    expect(routes['emergencyMore']).toBeDefined();
    expect(routes['location']).toBeDefined();
  });

});
