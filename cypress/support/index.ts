export {};

declare global {
  namespace Cypress {
    interface Chainable {
      dataCy(value: String): Chainable<any>;
      findById(id: string): Chainable<any>;
      findByClass(className: string): Chainable<any>;
    }
  }
}
