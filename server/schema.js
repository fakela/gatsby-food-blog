import { gql } from 'apollo-server-express'

const schema = gql`
  
  type Query {
    dummy: String
  }

  type Mutation {
    signUp(
      firstName: String!
      lastName: String!
      email: String!
    ): Response
  }

  type Response {
    result: String
  }
`

export default schema