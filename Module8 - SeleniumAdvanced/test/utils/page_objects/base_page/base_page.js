const Header = require('./header');
const Footer = require('./footer');

class BasePage {
    constructor() {
        this.Header = new Header();
        this.Footer = new Footer();
    };
    wait(waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    };
    async getCurrenUrl() {
        const currentUrl = browser.getCurrentUrl();
        return currentUrl;
    };
    open(url) {
        return browser.get(url);
    };
};

module.exports = BasePage;