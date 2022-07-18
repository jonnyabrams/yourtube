import express from 'express'
import { signup } from '../controllers/authController'

const router = express.Router()

// create user
router.post('/signup', signup)

// log in
router.post('/login', )

// google authentication
router.post('/google', )

export default router