

exports.config = {
    directConnect: true,
    framework: "mocha",
    specs: [
        '../specs/ForbesProject.spec.js',
        '../specs/EpamProject.spec.js'
    ],
    multiCapabilities:
    [ 
     {
   'browserName': 'chrome',
   'maxInstances': 5,
     }],
    baseUrl: 'localhost',
    mochaOpts: {
        reporter: 'spec',
        timeout: 70000
    },
    SELENIUM_PROMISE_MANAGER: 0,
};