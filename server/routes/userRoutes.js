import express from 'express'
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, updateUser } from '../controllers/user.js'

const router = express.Router()

// update user
router.put('/:id', updateUser)

// delete user
router.delete('/:id', deleteUser)

// get a user
router.get('/find/:id', getUser)

// subscribe to a user
router.put('/sub/:id', subscribe)

// unsubscribe from a user
router.put('/unsub/:id', unsubscribe)

// like a video
router.put('/like/:videoId', like)

// dislike a video
router.put('/dislike/:videoId', dislike)


export default router