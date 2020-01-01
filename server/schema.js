import { gql } from 'apollo-server-express'

const schema = gql`
  # At the time of writing, there is a bug that will crash
  # the application if there isn't at least one query
  # defined in the schema, so we have a dummy query.

  type Query {
    dummy: String
  }

  # We will use the signUp mutation to add data to the database,
  # we want to take in some user information as strings,
  # and reply with a response.

  type Mutation {
    signUp(
      firstName: String!
      lastName: String!
      email: String!
    ): Response
  }

  # The response will also be a string.

  type Response {
    result: String
  }
`

export default schema