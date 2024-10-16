import selectors from '../selectors';

export class HomePage {
  televisionsPage() {
    cy.get(selectors.home.hamburgerMenu).click();

    cy.get(selectors.home.sideMenuBar).within(() => {
      cy.findByRole('heading', { name: /Shop by Category/i })
        .should('be.visible')
        .wait(500); // Wait added to handle occasional flakiness where the menu may collapse prematurely

      cy.findByText('TV, Appliances, Electronics').click().wait(500);

      cy.get(selectors.home.sideMenuItems)
        .contains('Televisions')
        .click({ force: true });
    });
  }
}

export const navigateTo = new HomePage();
