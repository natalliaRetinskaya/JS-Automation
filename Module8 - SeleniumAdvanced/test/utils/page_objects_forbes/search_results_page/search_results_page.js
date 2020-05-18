const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");

class SearchResultsPage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.forbes.com/search/";
    };
    open() {
      return super.open(this.url);
    };
    //move to the Base page
};

module.exports = SearchResultsPage;