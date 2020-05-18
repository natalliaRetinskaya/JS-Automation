
browser.ignoreSynchrnization = true;
const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects_forbes/pageFactory");
const EC = protractor.ExpectedConditions;


describe("Header check", function () {
    // afterEach(function(){
    //     browser.close(); 
    // });

    it("First Header link is clickable", async function () {
        browser.waitForAngularEnabled(false);
        await PageFactory.getPage("Home").open();
        const firstNavigationButton = PageFactory.getPage("Home").Header.navigationButtons.collection.get(0);
        await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
        await browser.actions().click(firstNavigationButton).perform();
        browser.wait(EC.urlContains('billionaires'), 5000);
        // const currentUrl = await browser.getCurrentUrl();
        // expect(currentUrl).contains("billionaires")

    });

    it("Search for 'career' open appropriate page", async function () {
        browser.waitForAngularEnabled(false);
        await PageFactory.getPage("Home").open();
        await browser.findElement(By.css('[data-ga-track=\"U18 - Search Icon\"]')).click();
        browser.actions().sendKeys('career', protractor.Key.ENTER).perform()
        browser.wait(EC.urlContains('career'), 5000);
        // const currentUrl = await browser.getCurrentUrl();
        // expect(currentUrl).contains("career")

    });

    it("Search for 'million' open appropriate page", async function () {
        browser.waitForAngularEnabled(false);
        await PageFactory.getPage("Home").open();
        await browser.findElement(By.css('[data-ga-track=\"U18 - Search Icon\"]')).click();
        browser.actions().sendKeys('million').perform()
        browser.actions().mouseMove(element(by.css('[class=\"search-modal__submit\"]'))).mouseDown().mouseUp().perform()
        browser.wait(EC.urlContains('million'), 5000);
        // const currentUrl = await browser.getCurrentUrl();
        // expect(currentUrl).contains("million")

    });

    it("scroll to the footer", async function () {
        browser.waitForAngularEnabled(false);
        await PageFactory.getPage("Home").open();
        //return browser.executeScript('window.scrollTo(0, 0)')
        return browser.executeScript("window.scrollTo(0, document.body.scrollHeight)")

    });

    // it("zoom level to 80%", async function () {
    //     browser.waitForAngularEnabled(false);
    //     await PageFactory.getPage("Home").open();
    //     browser.executeScript("document.body.style.zoom='80");
    //     return browser.sleep(2000);

    // });

    // it("highlight header element", async function() {
    //     browser.waitForAngularEnabled(false);
    //     await PageFactory.getPage("Home").open();
    //     browser.executeScript("document.body.style.zoom='80");
    //     return browser.sleep(2000);

    // });

});