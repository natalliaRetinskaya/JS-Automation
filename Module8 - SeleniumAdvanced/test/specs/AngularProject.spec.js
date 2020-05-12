browser.ignoreSynchrnization = true;
const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects_forbes/pageFactory");
const EC = protractor.ExpectedConditions;
const {Builder, By, Key, until, driver} = require('selenium-webdriver');

describe("Header check", function() {
    // afterEach(function(){
    //     browser.close(); 
    // });

    it("First Header link is clickable", async function() {
        browser.waitForAngularEnabled(false);
        await PageFactory.getPage("Home").open();
        const firstNavigationButton = PageFactory.getPage("Home").Header.navigationButtons.collection.get(0);
        await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
        await browser.actions().click(firstNavigationButton).perform();
        const currentUrl = await browser.getCurrentUrl();
        expect(currentUrl).contains("billionaires")

    });

    it("Search", async function() {
        browser.waitForAngularEnabled(false);
        await PageFactory.getPage("Home").open();
        await browser.findElement(By.css('[data-ga-track=\"U18 - Search Icon\"]')).click();
        browser.actions().sendKeys('career', protractor.Key.ENTER).perform()
        const currentUrl = await browser.getCurrentUrl();
        expect(currentUrl).contains("career")
        //await browser.findElement(By.input('Search')).sendKeys('career', Key.RETURN);
        //await browser.findElement(By.input('Search')).sendKeys('career');
        //browser.actions().sendKeys(protractor.Key.ENTER).perform()

    });

});



