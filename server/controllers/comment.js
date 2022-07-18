import { createError } from '../error.js'
import Comment from '../models/Comment.js'
import Video from '../models/Video.js'

export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id })
  try {
    const savedComment = await newComment.save()
    res.status(200).send(savedComment)
  } catch (error) {
    next(error)
  }
}

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id)
    const video = await Video.findById(comment.videoId)

    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id)
      res.status(200).send('Comment deleted')
    } else {
      return next(createError(403, 'You can only delete your own comments'))
    }
  } catch (error) {
    next(error)
  }
}

export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId })
    res.status(200).send(comments)
  } catch (error) {
    next(error)
  }
}