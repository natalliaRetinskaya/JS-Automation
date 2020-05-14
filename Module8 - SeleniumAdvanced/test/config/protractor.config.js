const yargs = require('yargs').argv;

exports.config = {
    directConnect: true,
    framework: "mocha",
    specs: [
        '../specs/AngularProject.spec.js',
        '../specs/noAngularProject.spec.js'
    ],
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: 
        { 
           args: ['--window-size=1800,900'] 
        },
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 3,
    },
    baseUrl: 'localhost',
    mochaOpts: {
        reporter: 'spec',
        timeout: 70000
    }
};