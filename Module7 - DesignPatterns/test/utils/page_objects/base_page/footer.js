const Element = require("../base_elements/base_element");

class Footer {
    constructor() {
        this.epamContinuumLink = new Element("[alt=\"EPAM Continuum\"]");
    };

    clickFooterLogo() {
        return this.epamContinuumLink.click();
    }
};

module.exports = Footer;