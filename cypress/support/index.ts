export {};

declare global {
  namespace Cypress {
    interface Chainable {
      findById(id: string): Chainable<any>;
    }
  }
}
