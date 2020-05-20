
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");

class Header {
    constructor() {
        this.navigationButtons = new Collection("Navigation Button", "[aria-label=\"Billionaires\"]");
        this.contactUsButton = new Element(".cta-button-ui");
        this.searchButton = new Element("[data-ga-track=\"U18 - Search Icon\"]");
        this.secondSubNav = new Element("[data-ga-track=\"U18 - Channel: Innovation - Position 2 - Section: 5G\"]")
    };
    clickContacktUs(){
        return this.contactUsButton.click();
    };
    clickSearch(){
        return this.searchButton.click();
    }
};

module.exports = Header;