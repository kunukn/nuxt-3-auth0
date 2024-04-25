const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { auth } = require('express-oauth2-jwt-bearer')
const { join } = require('path')
const authConfig = require('./auth_config.json')

const app = express()

if (!authConfig.domain || !authConfig.authorizationParams.audience) {
  throw 'Please make sure that auth_config.json is in place and populated'
}

app.use(morgan('dev'))
app.use(cors())
app.use(express.static(join(__dirname, 'dist')))

const checkJwt = auth({
  audience: authConfig.authorizationParams.audience,
  issuerBaseURL: `https://${authConfig.domain}`,
})

app.get('/', (req, res) => {
  res.send('Backend server is up and running!')
})

app.get('/api/external', checkJwt, (req, res) => {
  res.send({
    msg: 'Your access token was successfully validated!',
  })
})

// Using http:// for simplicity. Don't use this in production.
const port = 3001
app.listen(port, () => console.log(`Server listening on port ${port}`))
