# nuxt-3-auth0
Playground for Nuxt 3 + Auth0

`@auth0/auth0-vue` is used.

# Getting started

## Prerequisite

- You need to have an Auth0 app.
- The `.env` must be updated with values from the Auth0 settings.

## Install steps:

```bash
# Ensure you have mkcert installed to use https in localhost. https://github.com/FiloSottile/mkcert

npm install

npm run create-env # creates a boilerplate .env file
# Update the .env file with your Auth0 config data.

npm run install-mkcert # Done once per OS, skip if has been done for your OS.

npm run create-cert-files-in-folder # Creates the localhost certificates.

npm start # Starts the app using https.
```

## Thoughts

You can use `'@auth0/auth0-spa-js'` and create a Vue wrapper if `@auth0/auth0-vue` is lacking req. features.