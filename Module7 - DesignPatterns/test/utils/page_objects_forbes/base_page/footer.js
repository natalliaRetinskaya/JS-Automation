const Element = require("../base_elements/base_element");

class Footer {
    constructor() {
        this.forbesLogo = new Element("[data-ga-track=\"Homepage Footer - Forbes Logo\"]");
    };

    clickFooterLogo() {
        return this.forbesLogo.click();
    }
};

module.exports = Footer;