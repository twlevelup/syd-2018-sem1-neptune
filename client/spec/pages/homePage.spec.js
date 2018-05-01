const HomePage = require("../../src/js/pages/homePage");

describe("HomePage", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });


  describe("#template", () => {
    it("should have a template", () => {
      const page = new HomePage();
<<<<<<< HEAD
      expect(page.template()).toContain(
        '<div>"What you believe you can achieve"</div>'
      );
=======
      expect(page.template()).toContain("</div>");
>>>>>>> Darshan/Natalia Homescreen with time on top, quote at the center with buttons to navigate
    });
  });

<<<<<<< HEAD

  describe("#topButtonEvent", () => {
    it("goes to alert page", () => {
=======
  describe('#buttonLabels', () => {
    it('should say Happy Thoughts for right button', () => {
      const page = new HomePage();
      expect(page.template()).toContain("Happy Thoughts");
    });
    it('should say My Details for bottom button', () => {
      const page = new HomePage();
      expect(page.template()).toContain("<div class=\"bottom-button\">Need help?</div>");
    });
    it('should say Location for left button', () => {
      const page = new HomePage();
      expect(page.template()).toContain("Location");
    });
  });
  

  describe('#leftButtonEvent', () => {
    it('goes to location page', () => {
>>>>>>> Katrina/Darshan Adding homeScreen button labels
      const props = {
        navigate: () => {}
      };
      const page = new HomePage(props);
      spyOn(page, "navigate");

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("alert");
    });
  });


  describe("#leftButtonEvent", () => {
    it("goes to location page", () => {
      const props = {
        navigate: () => {}
      };
      const page = new HomePage(props);
      spyOn(page, "navigate");

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("location");
    });
  });

<<<<<<< HEAD
  describe("#rightButtonEvent", () => {
    it("goes to contacts page", () => {
=======
  describe('#rightButtonEvent', () => {
    it('changes the quote', () => {
>>>>>>> Darshan/Natalia Homescreen with time on top, quote at the center with buttons to navigate
      const props = {
        navigate: () => {}
      };
      const page = new HomePage(props);
<<<<<<< HEAD
      spyOn(page, "navigate");

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("contacts");
=======
>>>>>>> Darshan/Natalia Homescreen with time on top, quote at the center with buttons to navigate
    });
  });

  describe("#bottomButtonEvent", () => {
    it("should take the user to the intro page", () => {
      const props = {
        navigate: () => {}
      };

      const page = new HomePage(props);
      spyOn(page, "navigate");

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("intro");
    });
  });


});
