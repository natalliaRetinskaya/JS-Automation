const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");

class OurWorkPage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.epam.com/our-work";
      this.ourWorkTitle = new Element("Our Work Title", ".title--mixed-case.color-almost-black");  
      this.filterArea = new Element("[class=\"detail-pages-filter__top-panel-holder\"]")
    };
    open() {
      return super.open(this.url);
    };
};

module.exports = OurWorkPage;