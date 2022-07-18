import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 8800

const connect = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to database')
  }).catch(error => { throw error })
}

app.listen(port, () => {
  connect()
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})