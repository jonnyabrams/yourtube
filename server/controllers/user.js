import { createError } from "../error.js"
import User from "../models/User.js"

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true }) // return the new username not the previous one
      res.status(200).send(updatedUser)
    } catch (error) {
      next(error)
    }
  } else {
    return next(createError(403, 'You can only update your own account'))
  }
}

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).send('User deleted')
    } catch (error) {
      next(error)
    }
  } else {
    return next(createError(403, 'You can only delete your own account'))
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).send(user)
  } catch (error) {
    next(error)
  }
}

export const subscribe = async (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
}

export const unsubscribe = async (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
}

export const like = async (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
}

export const dislike = async (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
}