const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");

class WhatWeDoPage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.epam.com/what-we-do";
      this.whatWeDoTitle = new Element("What We Do title", ".title--mixed-case.color-almost-black");  
    };
    open() {
      return super.open(this.url);
    };
};

module.exports = WhatWeDoPage;