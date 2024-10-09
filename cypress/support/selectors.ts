export default {
  home: {
    hamburgerMenu: '#nav-hamburger-menu',
    sideMenuBar: '#hmenu-content',
  },
  televisionsPage: {
    brandCheckbox: (brand: string) =>
      `input[type="checkbox"][aria-labelledby="${brand}"]`,
    sortDropdown: '#s-result-sort-select',
    productLink: '[data-cy="title-recipe"] a',
    aboutSection: '#feature-bullets',
    aboutHeading: '#feature-bullets h1',
    aboutBulletPoints: '#feature-bullets li',
    buyingOptionsMessageForResult:
      'Check each product page for other buying options.',
  },
};
