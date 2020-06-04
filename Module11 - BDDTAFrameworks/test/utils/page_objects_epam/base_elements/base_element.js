const logger = require('../../../config/logger.config');

class Element {
    constructor(selector) {
        this.element = element(by.css(selector));
    }
    click() {
        logger.info(`Clicking "${this.elementName}"`);
        return this.element.click();
    };
    async getText() {
        const elementText = await this.element.getText();
        logger.info(`"${this.elementName}" element text is ${elementText}`);
        return elementText;
    };
};

module.exports = Element;