

exports.config = {
    directConnect: true,
    framework: "mocha",
    specs: [
        '../specs/AngularProject.spec.js',
        '../specs/noAngularProject.spec.js'
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