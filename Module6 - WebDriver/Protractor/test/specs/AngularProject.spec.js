//browser.ignoreSynchrnization = true;
const expect = require("chai").expect;
const {Builder, By, Key, until, driver} = require('selenium-webdriver');

describe("Header controls are clickable", function() {
    beforeEach(function(){
        let width = 1780;
        let height = 1000;
        return browser.driver.manage().window().setSize(width, height);
    });

    it("Header links are clickable", async function() {
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.forbes.com/');
        await browser.findElement(By.linkText('Billionaires')).click();
        await browser.findElement(By.linkText('Innovation')).click();
        await browser.findElement(By.linkText('Leadership')).click();
        await browser.findElement(By.linkText('Money')).click();
        await browser.findElement(By.linkText('Business')).click();
        await browser.findElement(By.linkText('Small Business')).click();
        await browser.findElement(By.linkText('Lifestyle')).click();
        await browser.findElement(By.linkText('Lists')).click();
        await browser.findElement(By.linkText('Advisor')).click();
        await browser.findElement(By.linkText('Featured')).click();
        await browser.findElement(By.linkText('Breaking')).click();
        await browser.findElement(By.linkText('More')).click();
    });

    it("Header links are clickable", async function() {
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.forbes.com/');
        await browser.findElement(By.css('#aria-label')).click();
        await browser.findElement(By.ninput('Search')).sendKeys('career', Key.RETURN);

    });

});


