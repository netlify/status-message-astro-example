![Netlify Examples](./docs/netlify-examples.png)

# Dynamic Status Message with Astro

This is an example that uses server cookies to set a status message that is displayed on the page.

## Deploy to Netlify

[Check out the demo site](https://status-message-astro-example.netlify.app/) or click the button below to deploy your own copy of the example.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/status-message-astro-example)

## How it works

The home page has two buttons that both trigger status messages. The first shows a simple "Success!!" while the second lets you customize the message.

These buttons are really just forms that submit a `POST` request to the `/actions/set-status` endpoint. This endpoint sets a cookie with the status message and redirects back to the home page.

The home page then reads the cookie and stores the value in a variable. The cookies is deleted and the value displayed on the page.

## Getting Started

To use this project locally, first clone the repository:

    git clone git@github.com:netlify/status-message-astro-example.git
    cd status-message-astro-example

Install the dependencies:

    npm install

Install the Netlify CLI:

    npm install -g netlify-cli@latest

Start the development server:

    ntl dev --target-port 4321

This will open a browser window at `http://localhost:8888` with the example site.
