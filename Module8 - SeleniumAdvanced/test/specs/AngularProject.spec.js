browser.ignoreSynchrnization = true;
const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects_forbes/pageFactory");
const EC = protractor.ExpectedConditions;
const {Builder, By, Key, until, driver} = require('selenium-webdriver');

describe("Header controls are clickable", function() {
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
        //await browser.wait(EC.urlContains('billionaires'), 5000);

        //await browser.findElement(By.css('[aria-label=\"Billionaires\"]')).click();
        // await browser.findElement(By.css('[aria-label=\"Innovation\"]')).click();
        // await browser.findElement(By.css('[aria-label=\"Leadership\"]')).click();
        // await browser.findElement(By.css('[aria-label=\"Money\"]')).click();
        // await browser.findElement(By.css('[aria-label=\"Business\"]')).click();
        // await browser.findElement(By.css('[data-title=\"Small Business\"]')).click();
        // await browser.findElement(By.css('[aria-label=\"Lifestyle\"]')).click();
        // await browser.findElement(By.css('[aria-label=\"Lists\"]')).click();
        // await browser.findElement(By.css('[aria-label=\"Advisor\"]')).click();
        // await browser.findElement(By.css('[data-title=\"Featured\"]')).click();
        // await browser.findElement(By.css('[aria-label=\"Breaking\"]')).click();
        // await browser.findElement(By.css('[data-title=\"More\"]')).click();
    });

    // it("Search", async function() {
    //     browser.waitForAngularEnabled(false);
    //     await browser.get('https://www.forbes.com/');
    //     await browser.findElement(By.css('[data-ga-track=\"U18 - Search Icon\"]')).click();
    //     await browser.findElement(By.input('Search')).sendKeys('career', Key.RETURN);

    // });

});


