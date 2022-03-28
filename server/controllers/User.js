const { json } = require('express')
const { User } = require('../models')

const createUser = async (req, res) => {
  try {
    const newUser = await new User(req.body)
    await newUser.save()
    return res.status(201).json({ newUser })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const readUser = async (req, res) => {
  try {
    const Users = await User.find({})

    return res.status(201).json({ Users })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const User = await new User(req.body)
    const result = await User.updateOne({ _id: User._id }, User)

    if (result.modifiedCount > 0) {
      return res.status(201).json({ User })
    } else {
      return res.status(400).json({ error: 'could not update User' })
    }
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.query.UserId })
    return res.status(201).json()
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser
}
