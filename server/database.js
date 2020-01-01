import mongoose from 'mongoose'

// Check for DATABASE_URL from .env, use localhost as a fallback
const dbURL =
  process.env.DATABASE_URL ||
  'mongodb://localhost:27017/checking'

// Connect to MongoDB
mongoose.connect(dbURL).catch((err) => {
  console.log(err)
})

// We will export 'db' as the connection for use elsewhere
const db = mongoose.connection

// If there is a connection error, retry every 10 seconds
db.on('error', () => {
  setTimeout(() => {
    mongoose.connect(dbURL).catch((err) => {
      console.log(err)
    })
  }, 10000)
})

export default db