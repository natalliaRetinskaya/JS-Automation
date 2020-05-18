const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");

class PressRoomPage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.forbes.com/pr/";
    };
    open() {
      return super.open(this.url);
    };
    //move to the Base page
};

module.exports = PressRoomPage;