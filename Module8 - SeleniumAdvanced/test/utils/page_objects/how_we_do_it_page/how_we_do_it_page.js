const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");

class HowWeDoItPage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.epam.com/what-we-do";
      this.howWeDoItTitle = new Element("How We Do It Title", ".title--mixed-case.color-almost-black");  
    };
    open() {
      return super.open(this.url);
    };
};

module.exports = HowWeDoItPage;