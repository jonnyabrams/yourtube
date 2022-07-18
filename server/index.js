import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})