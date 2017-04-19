exports.config = {
  framework: 'custom',
  frameworkPath: '../../node_modules/protractor-cucumber-framework',
  seleniumArgs: [],
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  baseUrl: 'https://konesercatering.pl',

  verbose: true,

  specs: ['../tests/features/order*.feature'],
  chromeOnly: false,

  multiCapabilities: [
    {
      'browserName': 'firefox'
    }
  ],
  cucumberOpts: {
    format: 'pretty',
    require: ['../tests/step_definitions/*.js',
      'env.js']
  },


  allScriptsTimeout: 30000,


  rootElement: 'body'
};
