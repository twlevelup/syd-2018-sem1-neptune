const routes = require('../src/js/routes');

describe('routes', () => {

  it('all routes should exist', () => {
    expect(routes['/']).toBeDefined();
    expect(routes['contacts']).toBeDefined();
    expect(routes['team']).toBeDefined();
    expect(routes['404']).toBeDefined();
    expect(routes['intro']).toBeDefined();
    expect(routes['details']).toBeDefined();
    expect(routes['medical']).toBeDefined();
    expect(routes['medication']).toBeDefined();
    expect(routes['carerContact']).toBeDefined();
    expect(routes['relativeContactDetails']).toBeDefined();
    expect(routes['location']).toBeDefined();
    expect(routes['quotes']).toBeDefined();
    expect(routes['quotesTwo']).toBeDefined();
    expect(routes['quotesThree']).toBeDefined();
    expect(routes['reminder']).toBeDefined();
  });

});
