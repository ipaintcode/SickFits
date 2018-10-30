require('dotenv').config({
  path: 'variables.env'
})
const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

// TODO Use express middleware to handle JWT cookies
// TODO Use exprfess middleware to populate curr user

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
}, deets => {
  console.log(`Server runninng on port: ${deets.port}`)
})




FRONTEND_URL="http://localhost:7777"
PRISMA_ENDPOINT="https://us1.prisma.sh/mark-learst/siccccccck-fitsssssss/dev"
PRISMA_SECRET="hjgedv/%!@eifvihu2h3r"
APP_SECRET="jwtsecret123"
STRIPE_SECRET="sk_123youchanget his"
PORT=4444
