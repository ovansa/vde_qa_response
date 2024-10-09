import { defineConfig } from 'cypress';

export default defineConfig({
  viewportHeight: 800,
  viewportWidth: 1280,
  e2e: {
    baseUrl: 'https://www.amazon.in',
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 60000,
    env: {
      apiBaseUrl: 'https://reqres.in/api',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
