import app from './src/app'
import express, { Express, Request, Response } from 'express'
import Config from './src/config/config'
import DatabaseConnect from './src/config/database_connection'
import path from 'path'
//@desc Server Start
const server = app.listen(Config.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${Config.PORT} ⚡️`
  )
  console.log(`⚡️ Mode is  ${Config.ENVIRONMENT}⚡️`)
})

//@desc Handle read uploads files
//@route /foldername/file
app.use(express.static(path.join(__dirname, 'uploads')))

//@desc Connect to our database
DatabaseConnect()

//@desc Handle errors outside express
process.on('unhandledRejection', (error: Error) => {
  console.log(`unhandledRejection Error : ${error.name} | ${error.message}`)
  // eslint-disable-next-line no-undef
  server.close(() => {
    console.log(`Shutting down...`)
    process.exit(1)
  })
})
