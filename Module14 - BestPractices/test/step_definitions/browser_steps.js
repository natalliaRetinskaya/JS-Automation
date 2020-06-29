const {When, Then, setDefaultTimeout} = require('cucumber');
const {expect} = require('chai')
setDefaultTimeout(60000);
browser.ignoreSynchrnization = true;
const PageFactory = require("../utils/page_objects_epam/pageFactory");
const homePage = PageFactory.getPage("Home");

When(/^I open "([^"]*)" url$/, function(url){
    return browser.get(url);
});

When(/^I open "([^"]*)" page$/, async function(pageName) {
    const page = await PageFactory.getPage(pageName);
    return page.open();
  });

Then(/^Page title should be "([^"]*)"$/, async function(title){
    const pageTitle = await browser.getTitle();
    expect(title).to.be.equal(title)
});

When(/^I wait "([^"]*)" seconds$/, function(timeInSeconds){
    return browser.sleep(timeInSeconds*1000);
});

Then(/^I click "Search" icon$/, async function(){
    await homePage.Header.clickSearch();
});

Then(/^I enter "career" into search field$/, async function(){
  await homePage.Header.clickSearch();
  await homePage.Header.searchField.element.sendKeys('career')
});




// Then(/^Count of "([^"]*)" should( not)? be "([^"]*)"$/, async (expectedNumber) => {
//     let result = await element.count();
//     expectedNumber = parseInt(expectedNumber);
//         return expect(result).to.equal(expectedNumber);

// });


