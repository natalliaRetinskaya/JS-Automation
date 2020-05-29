let chaiAsPromised = require("chai-as-promised");
let expect = require("chai").use(chaiAsPromised).expect;
const PageFactory = require("../utils/page_objects_epam/pageFactory");
const EC = protractor.ExpectedConditions;


describe("Home page header", function () {
    let homePage = PageFactory.getPage("Home")
    const firstNavigationButton = homePage.Header.navigationButtons.collection.get(0);
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });

    it("EPAM: Search for 'career' open appropriate page", async function () {
        await homePage.open();
        await browser.wait(EC.elementToBeClickable(homePage.Header.searchButton.element), 10000);
        await homePage.Header.clickSearch();
        await browser.wait(EC.visibilityOf(homePage.Header.searchField.element), 10000);
        await homePage.Header.searchField.element.sendKeys('career')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        await browser.wait(EC.urlContains('career'), 10000);
    });

    it("scroll to the footer", async function () {
        await homePage.open();
        await browser.executeScript("window.scrollTo(0, document.body.scrollHeight)");
        expect(await homePage.Footer.footerCopyright.element.isDisplayed()).to.be.true;
    });


});