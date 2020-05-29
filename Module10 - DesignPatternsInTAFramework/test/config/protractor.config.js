const yargs = require('yargs').argv;

exports.config = {
    directConnect: true,
    framework: "mocha",
    specs: [
        '../specs/ForbesProject.spec.js',
        '../specs/EpamProject.spec.js',
        '../specs/EpamProject2.spec.js'
    ],
    capabilities: {
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        browserName: yargs.browser || 'chrome',
    },

    baseUrl: 'localhost',
    mochaOpts: {
        reporter: 'spec',
        timeout: 70000
    },
    SELENIUM_PROMISE_MANAGER: 0,
};