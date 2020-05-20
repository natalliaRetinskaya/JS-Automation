class Element {
    constructor(selector) {
        this.element = element(by.css(selector));
    }
    click() {
        return this.element.click();
    };
    async getText() {
        const elementText = await this.element.getText();
        return elementText;
    };
};

module.exports = Element;