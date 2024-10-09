import { ICreateUserRequest } from '../../support/types';

const apiBaseUrl = Cypress.env('apiBaseUrl');

const routes = {
  createUser: () => apiBaseUrl + '/users',
};

export const BookingService = () => {
  return {
    CreateUser: (data: ICreateUserRequest) =>
      cy.request({
        method: 'POST',
        url: routes.createUser(),
        body: data,
      }),
  };
};
