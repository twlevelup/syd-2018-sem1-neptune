const DetailsPage = require('../../src/js/pages/detailsPage');

describe('The Details Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new DetailsPage();
      expect(page.template()).toContain(`Name: Carl`);
    });
  });
});