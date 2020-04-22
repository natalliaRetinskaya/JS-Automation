const {Builder, By, Key, until} = require('selenium-webdriver');

 (async function example() {
   let driver = await new Builder().forBrowser('chrome').build();
   try {
     await driver.get('https://www.epam.com/');
     await driver.findElement(By.className('header-search__button header__icon')).click();
     await driver.findElement(By.name('q')).sendKeys('career', Key.RETURN);
     await driver.wait(until.titleIs('Search'), 1000);
     await driver.findElement(By.linkText('Careers')).click();
     await driver.wait(until.titleIs('Explore Professional Growth Opportunities | EPAM Careers'), 10000);
     await driver.wait(until.classIs('title__bottom-line'), 100000);
   } finally {
     await driver.quit();
   }
 })();



//  const {Builder, By, Key, until} = require('selenium-webdriver');
 
//  (async function example() {
//    let driver = await new Builder().forBrowser('chrome').build();
//    try {
//      await driver.get('http://www.google.com/ncr');
//      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//    } finally {
//      await driver.quit();
//    }
//  })();