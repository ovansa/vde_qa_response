# Vendease QA Response

## Setup

1. Clone the repository:

`git clone https://github.com/ovansa/vde_qa_response.git` or `git clone git@github.com:ovansa/vde_qa_response.git`

2. Navigate into the project directory:

`cd vde_qa_response`

3. Install the required dependencies:

`npm ci`

## Running the tests

### Locally

1. To run all the tests, use the following command: `npm run test`

2. To run the Amazon E2E tests, use the following command: `npm run test:e2e`

3. To run the Reqres Server API tests, use the following command: `npm run test:api`

### With Docker

1. Build the Docker image: `docker build -t vendease-tests .`

2. Run the tests in a Docker container: `docker run -it vendease-tests`
