const db = require('../db')
const { Post } = require('../models')

db.on(
  'error',
  console.error.bind(console, 'MongoDB connection error in seed/Post')
)

const main = async () => {
  const Post = {
    userId: null,
    content: 'Hello!',
    date: new Date()
  }

  console.log(Post.date)

  await Customer.insertMany(customers)
  console.log('Created customers !')
}
const run = async () => {
  await main()
  db.close()
}

run()
