const {Builder, By, Key, until} = require('selenium-webdriver');

 (async function SearchPageCanBeOpened() {
   let driver = await new Builder().forBrowser('chrome').build();
   try {
     await driver.get('https://www.epam.com/');
     await driver.findElement(By.className('header-search__button header__icon')).click();
     await driver.findElement(By.name('q')).sendKeys('career', Key.RETURN);
     await driver.wait(until.titleIs('Search'), 10000);
   } finally {
     await driver.quit();
   }
 })();

