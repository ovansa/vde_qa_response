import selectors from '../selectors';

export class HomePage {
  televisionsPage() {
    cy.get(selectors.home.hamburgerMenu).click();

    cy.get(selectors.home.sideMenuBar).within(() => {
      cy.findByRole('heading', { name: /Shop by Category/i }).should(
        'be.visible'
      );
      cy.findByText('TV, Appliances, Electronics').click();

      cy.findByRole('heading', { name: /TV, Audio & Cameras/i }).should(
        'be.visible'
      );
      cy.findByText('Televisions').click();
    });
  }
}

export const navigateTo = new HomePage();
