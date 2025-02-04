const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      tasks = sqlServer.loadDBPlugin(config);
      on('task', tasks);
      return config;
    },
    viewportWidth: 1536,  // Set default width for Windows resolution
    viewportHeight: 824,  // Set default height for Windows resolution
  },
});