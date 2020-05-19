
// browser.ignoreSynchrnization = true;
// let chaiAsPromised = require("chai-as-promised");
// let expect = require("chai").use(chaiAsPromised).expect;
// const PageFactory = require("../utils/page_objects_forbes/pageFactory");
// const EC = protractor.ExpectedConditions;


// describe("Header check", function () {
//     browser.waitForAngularEnabled(false);
//     let homePage = PageFactory.getPage("Home");

//     it("First Header link is clickable", async function () {
//         await homePage.open();
//         const firstNavigationButton = homePage.Header.navigationButtons.collection.get(0);
//         await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
//         await browser.actions().click(firstNavigationButton).perform();
//         browser.wait(EC.urlContains('billionaires'), 5000);

//     });

//     it("Hover on header link expands additional menu", async function () {
//         await homePage.open();
//         const secondNavigationButton = homePage.Header.navigationButtons.collection.get(0);
//         await browser.wait(EC.elementToBeClickable(secondNavigationButton), 10000);
//         await browser.actions().mouseMove(secondNavigationButton).perform();
//         expect(homePage.Header.secondSubNav.element.isDisplayed()).to.be.eventually.true;

//     });

//     it("Search for 'career' open appropriate page", async function () {
//         await homePage.open();
//         await homePage.Header.searchButton.clickSearch;
//         browser.actions().sendKeys('career', protractor.Key.ENTER).perform()
//         browser.wait(EC.urlContains('/search/?q=career'), 5000);

//     });


//     iit("Search for 'million' open appropriate page", async function () {
//         await homePage.open();
//         await homePage.Header.searchButton.clickSearch;
//         browser.actions().sendKeys('million').perform()
//         browser.actions().mouseMove(element(by.css('[class=\"search-modal__submit\"]'))).mouseDown().mouseUp().perform()
//         browser.wait(EC.urlContains('/search/?q=million'), 5000);

//     });

//     it("scroll to the footer", async function () {
//         await homePage.open();
//         await browser.executeScript("window.scrollTo(0, document.body.scrollHeight)");
//         expect(homePage.Footer.forbesLogo.element.isDisplayed()).to.be.eventually.true;
    
//     });

// });