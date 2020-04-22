browser.ignoreSynchrnization = true;
const expect = require("chai").expect;
const until = require('selenium-webdriver');

describe("Count header links", function() {
    beforeEach(function(){
        let width = 1980;
        let height = 600;
        return browser.driver.manage().window().setSize(width, height);
    });

    it("should have 6 menu items", async function() {
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.epam.com');
        const countOfNavigationButtons = await element.all(by.css("div.header .top-navigation__item")).count();
        expect(countOfNavigationButtons).to.be.equal(6)
    })
});