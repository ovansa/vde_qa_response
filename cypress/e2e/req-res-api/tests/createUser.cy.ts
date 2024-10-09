import { BookingService } from '../userConsumer';

describe('User Creation API - ReqRes Users Endpoint', () => {
  it('should create users successfully and validate the response schema', function () {
    cy.fixture('userData.json').then((userData) => {
      userData.users.forEach((user) => {
        const requestData = {
          name: user.name,
          job: user.job,
        };

        BookingService()
          .CreateUser(requestData)
          .then((response) => {
            cy.log('Verify status code');
            expect(response.status).to.eq(201);

            cy.log('Verify response body');
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq(requestData.name);
            expect(response.body.job).to.eq(requestData.job);

            cy.log('Verify response schema');
            expect(response.body).to.have.all.keys(
              'name',
              'job',
              'id',
              'createdAt'
            );

            cy.log('Verify response time less than 2 seconds');
            expect(response.duration).to.be.lessThan(2000);

            cy.log('Verify response header content type');
            expect(response.headers).to.have.property('content-type');
            expect(response.headers['content-type']).to.contain(
              'application/json'
            );
          });
      });
    });
  });
});
