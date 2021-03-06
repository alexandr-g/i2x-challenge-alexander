## Overview
This is a coding challenge for i2x.

It is a React app with:
1. Login Page (/login)
2. Dashboard page with a list of playable audio (/dashboard)
3. NotFound page

<img width="1275" alt="screen shot 2017-04-30 at 10 15 01 am" src="https://cloud.githubusercontent.com/assets/9251327/25562743/78a3dc30-2d8e-11e7-9e30-c942a3a50a91.png">

<img width="1271" alt="screen shot 2017-04-24 at 5 39 25 pm" src="https://cloud.githubusercontent.com/assets/9251327/25562679/2c4fdc9a-2d8d-11e7-94be-89230c4b5754.png">

## Usage

#### To run project locally

**Clone the repo:**

`$ git clone https://github.com/alexandr-g/i2x-challenge-alexander.git`

**Install project dependencies:**
```bash
$ npm i
```

**To start the project in development mode:**
```bash
$ npm start
```

That will spin up your default browser on `http://localhost:3000`

#### Testing

Run tests using Jest:

```bash
$ npm run test
```

#### Linting

Run linter by executing:

```bash
$ npm run lint
```

#### Routes

- **/login**
-- Please login with email `challenge@i2x.ai` and password `pass123`
- **/dashboard**
-- Displays audio recordings with rating and description
- **Logout**
-- By clicking logout at the right top corner of the page that will clear JWT token in Local Storage.


#### Deployment
WIP

## Project Structure

    ├── src                          - All the source code
    │   ├── actions                     - Redux actions
    │   ├── components                  - React components (UI)
    │   ├── reducers                    - Redux reducers
    │   ├── utils                       - Helpful utils (setAuthorizationToken)
    │   ├── index.ejs                   - HTML file starting point
    │   └── index.js                    - Client entry point
    ├── tools                           - Various bundler tools
    ├── package.json                    - List of dependencies
    ├── .babelrc                        - Babel config
    ├── .editorconfig                   - Global editor config file
