const logger = require("../../../config/logger.config");
const Element = require("../base_elements/base_element");

class Footer {
    constructor() {
        this.epamContinuumLink = new Element(".footer__brands-image.EPAM");
        this.footerCopyright = new Element(".footer__copyright")
    };

    clickFooterLogo() {
        logger.info(`Clicking "EPAM Continuum footer link"`);
        return this.epamContinuumLink.click();
    }
};

module.exports = Footer;