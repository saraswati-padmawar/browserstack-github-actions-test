var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
  'browserName': 'chrome',
  'os': 'OS X',
  'os_version': 'High Sierra',
  'build': process.env.BROWSERSTACK_BUILD_NAME,
  'project': process.env.BROWSERSTACK_PROJECT_NAME,
  'browserstack.user': process.env.BROWSERSTACK_USERNAME,
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY
  // Removed browserstack.local settings
};

var driver = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build();

driver.get('https://www.google.com').then(function () {
  driver.getTitle().then(function (title) {
    console.log('Page Title:', title);
    driver.quit();
  });
});
