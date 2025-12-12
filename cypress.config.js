const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    supportFile: 'cypress/support/index.js',
    specPattern: 'cypress/e2e/**/*.js',
    video: false
  },
  env: {
    username: 'standard_user',
    password: 'secret_sauce'
  }
})
