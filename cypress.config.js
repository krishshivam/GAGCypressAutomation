const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1536,  // Set default width for Windows resolution
    viewportHeight: 824,  // Set default height for Windows resolution
  },
});