import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import videoRoutes from './routes/videoRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8800

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/comments', commentRoutes)

const connect = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to database')
  }).catch(error => { throw error })
}

app.listen(port, () => {
  connect()
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})