  
const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects/pageFactory");
const EC = protractor.ExpectedConditions;
describe("Home page header", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            //return browser.driver.manage().window().setSize(width, height);
    });

    it("should have 6 menu items", async function () {
        await PageFactory.getPage("Home").open();
        const firstNavigationButton = PageFactory.getPage("Home").Header.navigationButtons.collection.get(0);
        await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
        await browser.actions().click(firstNavigationButton).perform();
        const countOfNavigationButtons = await PageFactory.getPage("Home").Header.navigationButtons.getCount();
        expect(countOfNavigationButtons).to.be.equal(6);
    });
});