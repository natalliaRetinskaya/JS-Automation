const expect = require("chai").expect;
const until = require('selenium-webdriver');

describe("Login to the RBSourse application", function() {
    beforeEach(function(){
        browser.ignoreSynchrnization = true;
        let width = 800;
        let height = 600;
        return browser.driver.manage().window().setSize(width, height);
    });

    it("should successfully login to the application", async function(){

        await browser.get('https://clarity.design/');
        //await expect(browser.getTitle().toContain('Airline Tickets & Flights: Book Direct with Delta Air Lines - Official Site'));
        await browser.findElement(by.linkText('Community')).click();
        await browser.findElement(by.linkText('Report an issue')).click();
        await browser.getWindowHandle();
        //await browser.wait(until.titleContain('Issues · vmware/clarity'), 100000);
        expect(browser.getCurrentUrl.toContain('https://github.com/vmware/clarity/issues'));
        //expect(browser.getTitle().toContain('Help Center : Get Help with Reservations, Baggage & More : Delta Air Lines'));
        // await browser.findElement(By.name('q')).sendKeys('career', Key.RETURN);
        // await browser.wait(until.titleIs('Search'), 1000);
        // await browser.findElement(By.link('https://www.epam.com/about/who-we-are/contact')).click();
        // await browser.wait(until.classIs('title__bottom-line'), 100000);
       // expect(browser.getTitle().toContain('Help Center : Get Help with Reservations, Baggage & More : Delta Air Lines'));
    })
})


