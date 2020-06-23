const yargs = require('yargs').argv;
const path = require('path')
const reporter = require('cucumber-html-reporter')

const reportOptions ={
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../reports/report.json'),
    output: path.join(__dirname, '../reports/cucumber-report.html'),
    reportSuitesAsScenarios: true
}

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [path.resolve('./test/features/*.feature')],
    capabilities: {
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        browserName: yargs.browser || 'chrome',
        chromeOptions: {
            args: ['--no-sandbox', '--window-size=1920,1080']
        }
    },

    disableChecks: true,
    cucumberOpts: {
        require: [path.resolve('./test/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: ['json:./test/reports/report.json', './node_modules/cucumber-pretty'],
        tags: yargs.tags || '@smoke'
    },

    onPrepare: () => {
        return browser.waitForAngularEnabled(false);
    },
    afterLaunch: () => {
        return reporter.generate(reportOptions)
    }
};