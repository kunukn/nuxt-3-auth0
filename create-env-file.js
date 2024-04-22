import fs from 'fs'

const filename = '.env'

const content = `
NUXT_ENV_AUTH0_DOMAIN=dev-3crf3f0p.eu.auth0.com
NUXT_ENV_AUTH0_CLIENT_ID=abcdefgh12345678
NUXT_ENV_AUTH0_SCOPE=openid profile email offline_access
NUXT_ENV_AUTH0_AUDIENCE=https://myapp.com
NUXT_ENV_AUTH0_CALLBACK_URL=/auth-callback
NUXT_ENV_BASE_API_URL=https://localhost:44394
`

fs.access(filename, fs.F_OK, (err) => {
  if (err) {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error(err)
        return
      }
      console.log('.env file was created', content)
    })
  }
})
