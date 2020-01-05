import db from './database'


const subscribersCollection = 'subscribers'


export const addSubscriber = async (args) => {
  // Check that this Email is unique from the database
  if (await checkForDuplicateEmail(subscribersCollection, args)) {
    // Respond to client via Apollo
    return 'This Email address is already subscribed!'
  } else {
    // Insert data into database, return reponse to Apollo
    return dbInsertSubscriber(subscribersCollection, args)
  }
}

// This function is called from the main addSubscriber function above
const checkForDuplicateEmail = (collectionName, { email } = args) => {
  return new Promise(async (resolve) => {
    if (await checkCollectionExists(collectionName)) {
      // if collection exists, check if new Email is already in db
      db.collection(collectionName).findOne(
        { email },
        (err, data) => {
          if (err) console.log(err)
          if (data) {
            // Email already exists
            resolve(true)
          } else {
            // Email is unique and can be added to db
            resolve(false)
          }
        },
      )
    } else {
      // db collection does not exist, skip checking for Email
      resolve(false)
    }
  })
}

// This function is called from the checkForDuplicateEmail function above
const checkCollectionExists = (collectionName) => {
  return new Promise((resolve) => {
    db.db
      .listCollections({ name: collectionName })
      .next((err, collectionInfo) => {
        if (err) console.log(err)
        if (collectionInfo) {
          // db collection exists
          resolve(true)
        } else {
          // db collection does not exist, it will
          // be created automatically when data is inserted
          resolve(false)
        }
      })
  })
}

// This function is called from the main addSubscriber function above
const dbInsertSubscriber = (collectionName, args) => {
  return new Promise((resolve) => {
    // insert subscriber data, I've also added some defaults
    // that I wanted in the database here - start date (today),
    // cancellation date (null), and active (true), anything you
    // add here will be put into every database entry so keep that
    // in mind.
    db.collection(collectionName).insertOne(
      {
        ...args,
        subscriptionDate: new Date(),
        cancelDate: null,
        active: true,
      },
      (err) => {
        if (err) {
          console.log(err)
          // these responses will get sent back to the client via Apollo
          resolve(
            'Error: Request rejected - pleasae try again later...',
          )
        } else {
          resolve('Your subscription has been submitted, thank you!')
        }
      },
    )
  })
}