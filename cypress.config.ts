import { defineConfig } from 'cypress';

export default defineConfig({
  viewportHeight: 800,
  viewportWidth: 1280,
  e2e: {
    baseUrl: 'https://www.amazon.in',
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
