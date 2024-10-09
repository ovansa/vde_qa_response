import { SortOption, TelevisionBrand } from '../types';

import selectors from '../selectors';

export class TelevisionsPage {
  private logToConsole(text: string) {
    cy.log(text);
    console.log(text);
  }

  selectTelevisionBrand(brand: TelevisionBrand) {
    cy.findByText('Brand').scrollIntoView().should('be.visible');
    cy.get(selectors.televisionsPage.brandCheckbox(brand)).check({
      force: true,
    });
    cy.findByText(
      selectors.televisionsPage.buyingOptionsMessageForResult
    ).should('be.visible');
  }

  sortTelevisionsBy(sortOption: SortOption) {
    cy.get(selectors.televisionsPage.sortDropdown).select(sortOption, {
      force: true,
    });
    cy.findByText(
      selectors.televisionsPage.buyingOptionsMessageForResult
    ).should('be.visible');
  }

  selectAProductToViewDetails(productPosition: number) {
    cy.get(selectors.televisionsPage.productLink)
      .eq(productPosition)
      .invoke('removeAttr', 'target')
      .click();
  }

  verifyAboutSectionIsVisible() {
    cy.get(selectors.televisionsPage.aboutSection).should('be.visible');
  }

  logContentOfAboutSectiontoConsole() {
    cy.get(selectors.televisionsPage.aboutHeading).then(($heading) => {
      const headingText = $heading.text().trim();
      this.logToConsole(headingText);
    });

    cy.get(selectors.televisionsPage.aboutBulletPoints).each(($el) => {
      const bulletText = $el.text().trim();
      this.logToConsole(bulletText);
    });
  }
}

export const onTelevisionsPage = new TelevisionsPage();
