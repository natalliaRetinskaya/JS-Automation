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

    it("should have 6 menu items", async function () {
        await homePage.open();
        await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
        const countOfNavigationButtons = await homePage.Header.navigationButtons.getCount();
        expect(countOfNavigationButtons).to.be.equal(6);
    });

    it("Hover on header link expands additional menu", async function () {
        await homePage.open();
        await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
        await browser.actions().mouseMove(firstNavigationButton).perform();
        await browser.wait(EC.visibilityOf(homePage.Header.firstNavigationButtonDropdown.collection.get(0)), 10000)
        expect(await homePage.Header.firstNavigationButtonDropdown.collection.get(0).isDisplayed()).to.be.true;
    });


    it("First Header link is clickable", async function () {
        await homePage.open();
        await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
        await firstNavigationButton.click()
        await browser.wait(EC.urlContains('what-we-do'), 5000);
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
        expect(await homePage.Footer.epamContinuumLink.element.isDisplayed()).to.be.true;
    });

    it("Location selector can be expanded", async function () {
        await homePage.open();
        await browser.wait(EC.elementToBeClickable(homePage.Header.locationSelectButton.element), 10000);
        await homePage.Header.clickLocationSelectorButton();
        await browser.wait(EC.visibilityOf(homePage.Header.languageDropdown.collection.get(0)), 10000);
        expect(await homePage.Header.languageDropdown.collection.get(0).isDisplayed()).to.be.true;
    });


});