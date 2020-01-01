import cors from 'cors'
import express from 'express'
import schema from './schema'
import resolvers from './resolvers'
import { ApolloServer } from 'apollo-server-express'
const morgan = require('morgan')

// Source the .env file if it exists
require('dotenv').config()

// Set fallbacks for GraphQL/Apollo URL, port, and CORS address
// in case they are not present in a .env file
const GQL_URL = process.env.GQL_URL || '/api/v1'
const SERVE_PORT = process.env.GQL_PORT || 3000
const CORS_ADDRESS = process.env.CORS_ADDRESS || '*'

// Basic express setup with logging
const app = express()
app.use(
  cors({
    origin: CORS_ADDRESS,
  }),
)
app.use(morgan('tiny'))

// Plug schema and resolvers into Apollo server
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

// Serve static HTML from the public folder in the root of the application
// this is where Gatsby build puts the final output files
app.use(express.static('public'))

// Requests to the GraphQL/Apollo URL should go to Apollo
server.applyMiddleware({ app, path: GQL_URL })

// Redirect any routes that aren't specified above this line to /404
app.get('*', function(req, res) {
  res.redirect('/404')
})

// Start the server!
app.listen({ port: SERVE_PORT }, () => {
  console.log('Server running on http://localhost:' + SERVE_PORT)
})