const { json } = require('express')
const { Post } = require('../models')

const createOne = async (req, res) => {
  try {
    const newPost = await new Post(req.body)
    await newPost.save()
    return res.status(201).json(newPost)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const readOne = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.postId })

    return res.status(201).json(post)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const readAll = async (req, res) => {
  try {
    const posts = await Post.find({})

    return res.status(201).json(posts)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const updateOne = async (req, res) => {
  try {
    const post = await new Post(req.body)
    const result = await Post.updateOne({ _id: post._id }, post)

    if (result.modifiedCount > 0) {
      return res.status(201).json(post)
    } else {
      return res.status(400).json({ error: 'could not update post' })
    }
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const deleteOne = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.query.postId })
    return res.status(201).json()
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

module.exports = {
  createOne,
  readOne,
  readAll,
  updateOne,
  deleteOne
}
