browser.ignoreSynchrnization = true;
const expect = require("chai").expect;
const {Builder, By, Key, until, driver} = require('selenium-webdriver');

describe("Header controls are clickable", function() {

    it("Header links are clickable", async function() {
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.forbes.com/');
        await browser.findElement(By.css('[aria-label=\"Billionaires\"]')).click();
        await browser.findElement(By.css('[aria-label=\"Innovation\"]')).click();
        await browser.findElement(By.css('[aria-label=\"Leadership\"]')).click();
        await browser.findElement(By.css('[aria-label=\"Money\"]')).click();
        await browser.findElement(By.css('[aria-label=\"Business\"]')).click();
        await browser.findElement(By.css('[aria-label=\"Small Business\"]')).click();
        await browser.findElement(By.css('[aria-label=\"Lifestyle\"]')).click();
        await browser.findElement(By.css('[aria-label=\"Lists\"]')).click();
        await browser.findElement(By.css('[aria-label=\"Advisor\"]')).click();
        //await browser.findElement(By.css('[aria-label=\"Featured\"]').click();
        await browser.findElement(By.css('[aria-label=\"Breaking\"]')).click();
        await browser.findElement(By.css('[aria-label=\"More\"]')).click();
    });

    it("Search", async function() {
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.forbes.com/');
        await browser.findElement(By.css('[data-ga-track=\"U18 - Search Icon\"]')).click();
        await browser.findElement(By.input('Search')).sendKeys('career', Key.RETURN);

    });

});


