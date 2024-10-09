import { SortOption, TelevisionBrand } from '../support/constants';

import { navigateTo } from '../support/page_objects/homePage';
import { onTelevisionsPage } from '../support/page_objects/televisionsPage';

describe('Website ***', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the "About this item" section', () => {
    navigateTo.televisionsPage();

    onTelevisionsPage.selectTelevisionBrand(TelevisionBrand.Samsung);
    onTelevisionsPage.sortTelevisionsBy(SortOption.PriceHighToLow);

    onTelevisionsPage.selectAProductToViewDetails(1);

    onTelevisionsPage.verifyAboutSectionIsVisible();
    onTelevisionsPage.logContentOfAboutSectiontoConsole();
  });
});
