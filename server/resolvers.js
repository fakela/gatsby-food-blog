import db from './database'
import { addSubscriber } from './dbActions'

const resolvers = {
  Mutation: {
    // parent is required here even though it is not used directly
    signUp: async (parent, args) => {
      // Make sure we can talk to the database, let the client know if we can't
      if (db.readyState !== 1) {
        return {
          result:
            'Error: Database unreachable - please try again later...',
        }
      } else {
        // Run the addSubscriber function from our dbActions.js file
        const result = await addSubscriber(args)
        // Return the response to Apollo to be sent to the client
        return { result }
      }
    },
  },
}

export default resolvers