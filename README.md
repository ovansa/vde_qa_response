# Vendease QA Response

## Overview

This repository contains end-to-end (E2E) and API tests for the Assessment.

## Setup

### 1. Clone the repository:

```bash
git clone https://github.com/ovansa/vde_qa_response.git
# OR
git clone git@github.com:ovansa/vde_qa_response.git
```

### 2. Navigate into the project directory:

```bash
cd vde_qa_response
```

### 3. Install the required dependencies:

```bash
npm ci
```

This ensures a clean install based on the `package-lock.json`, which is important for consistency in environments.

## Running the Tests

### Locally

The tests are set up to run in **Chrome** browser by default. Ensure you have Chrome installed before proceeding.

#### 1. To run all the tests:

```bash
npm run test
```

This will execute both E2E and API tests, as defined in the project structure.

#### 2. To run only the Amazon E2E tests:

```bash
npm run test:e2e
```

This command will specifically run the end-to-end tests for the Amazon.in workflow.

#### 3. To run only the Reqres Server API tests:

```bash
npm run test:api
```

This command will run the API tests using the Reqres server mock.

### With Docker

If you prefer to run the tests in a Docker container, follow these steps:

#### 1. Build the Docker image:

```bash
docker build -t vendease-tests .
```

#### 2. Run the tests inside a Docker container:

```bash
docker run -it vendease-tests
```

This allows you to run the tests on any machine without worrying about dependencies like Node.js or Chrome being installed locally.

### Continuous Integration: GitHub Actions

The project is configured to run tests automatically using **GitHub Actions**. Tests are executed on every code push and can also be triggered manually or scheduled to run every night.

#### GitHub Actions Setup

1. **On Push**: The tests will automatically run whenever there is a push to the repository.
2. **Manual Trigger**: You can manually trigger the test workflow via the **"Run workflow"** button in the GitHub Actions tab.
3. **Nightly Runs**: Tests are scheduled to run every night at midnight (UTC) using a cron job.

## Project Structure

The project is organized following the **Page Object Model (POM)** design pattern for better separation of concerns and maintainability.

- **/support/page_objects/**: Contains the page objects for different sections of the app. Each page object abstracts the interaction with the UI elements, ensuring better maintainability when UI changes occur.
- **/tests/**: Contains both API and E2E tests with readable test names and well-structured assertions.
- **/fixtures/**: Contains sample test data used for API tests.
- **/selectors/**: Houses reusable selectors to maintain clean code and keep the page object files DRY.

## Troubleshooting

- **Test failing due to elements not being visible**: This may be caused by slow loading times in some environments. Consider adding additional wait times or retries.
- **Cypress is not opening**: Ensure you have Chrome installed and are not running other conflicting processes.

- **Docker-related issues**: Ensure you are using the latest version of Docker, and the Docker service is running properly.
