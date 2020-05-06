browser.ignoreSynchrnization = true;
const expect = require("chai").expect;
const until = require('selenium-webdriver');
const BasePage = require("../utils/page_objects/base_page/base_page")

describe("Count header links", function() {
    beforeEach(function(){
        let width = 1980;
        let height = 600;
        return browser.driver.manage().window().setSize(width, height);
    });

    it("should have 6 menu items", async function() {
        browser.waitForAngularEnabled(false);
        const countOfNavigationButtons = await BasePage.open("https://www.epam.com").Header.navigationButtons.getCount();
        expect(countOfNavigationButtons).to.be.equal(6);
    })
});