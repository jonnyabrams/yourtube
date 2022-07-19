import express from 'express'
import { googleAuth, login, signup } from '../controllers/auth.js'

const router = express.Router()

// create user
router.post('/signup', signup)

// log in
router.post('/login', login)

// google authentication
router.post('/google', googleAuth)

export default router