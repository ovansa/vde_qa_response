import { SortOption, TelevisionBrand } from '../../../support/types';

import { navigateTo } from '../../../support/page_objects/homePage';
import { onTelevisionsPage } from '../../../support/page_objects/televisionsPage';

describe('Television Shopping Experience on the Website', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the "About this item" section for the selected television', () => {
    navigateTo.televisionsPage();

    onTelevisionsPage.selectTelevisionBrand(TelevisionBrand.Samsung);
    onTelevisionsPage.sortTelevisionsBy(SortOption.PriceHighToLow);

    onTelevisionsPage.selectAProductToViewDetails(1);

    onTelevisionsPage.verifyAboutSectionIsVisible();
    onTelevisionsPage.logContentOfAboutSectiontoConsole();
  });
});
