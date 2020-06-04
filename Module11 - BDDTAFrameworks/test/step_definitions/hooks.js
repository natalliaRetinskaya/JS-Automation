const {After} = require('cucumber');

After ({tags: '@smoke'}, async function(testCase){
    const screenshot = await browser.takeScreenshot();
    const decodedImage = new Buffer.from(screenshot, 'base64');
    return this.attach(decodedImage, 'image/png');
})