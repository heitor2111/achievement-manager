import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    const app = express()

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`)
    })
  })
  .catch(err => {
    console.log(err)
  })
