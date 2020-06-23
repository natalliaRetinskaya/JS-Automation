const {When, Then, setDefaultTimeout} = require('cucumber');
const {expect} = require('chai')
setDefaultTimeout(60000);

When(/^I open "([^"]*)" url$/, function(url){
    return browser.get(url);
});

Then(/^Page title should be "([^"]*)"$/, async function(title){
    const pageTitle = await browser.getTitle();
    expect(title).to.be.equal(title)
});

When(/^I wait "([^"]*)" seconds$/, function(timeInSeconds){
    return browser.sleep(timeInSeconds*1000);
});

// Then(/^Count of "([^"]*)" should( not)? be "([^"]*)"$/, async (expectedNumber) => {
//     let result = await element.count();
//     expectedNumber = parseInt(expectedNumber);
//         return expect(result).to.equal(expectedNumber);

// });


