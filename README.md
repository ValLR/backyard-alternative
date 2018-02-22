# Backyard

Backyard is a Create React App (CRA). More about that here: https://github.com/facebook/create-react-app

## Configuration

Copy `.env.example` to `.env`, this sets some basic env vars for the project to work:

* `NODE_PATH` : Tells webpack where to base relative import searches

## Running

Development:
* Run `yarn relay` to refresh GraphQL schema and compile Relay components
* Run `yarn relay --watch` to rerfesh and compile continously (requires [Watchman](https://facebook.github.io/watchman/))
* Run `yarn start` to run development server
