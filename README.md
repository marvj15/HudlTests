# HudlTests

This repository contains automated tests for hudl login functions. It provides a script to run the tests and verify the functionality of the application. Follow the steps below to set up and run the tests.

## Prerequisites

Make sure you have the following dependencies installed:

- Node.js
- npm or yarn

## Installation

1. Clone the repository to your local machine using the following command:

```shell
git clone <repository_url>
```

2. Navigate to the project's root directory:

```shell
cd HudlTests
```

3. Install the required node modules by running one of the following commands:

Using npm:

```shell
npm install
```

Using yarn:

```shell
yarn
```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Open the `.env` file and add the following environment variables:

```dotenv
TEST_EMAIL=''
TEST_PASSWORD=''
TEST_EMAIL_INCORRECT=''
TEST_PASSWORD_INCORRECT=''
```

Replace the empty values with the appropriate test credentials. Make sure to provide correct and incorrect email and password combinations for testing different scenarios.

## Running the Tests

Once the setup and configuration steps are completed, you can execute the test script. Use one of the following commands:

Using npm:

```shell
npm test ./tests/test.js
```

Using yarn:

```shell
yarn test ./tests/test.js
```

The test script will run the automated tests specified in the `test.js` file located in the `tests` directory. The results will be displayed in the console, indicating whether the tests passed or failed.
