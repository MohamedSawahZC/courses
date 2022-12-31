//@desc Packages imports
import express from 'express'
import CategoryRouter from './api/categoryRoutes'
import UserRouter from './api/userRoutes'

//@desc Routers imports

//@desc get express router
const routes = express.Router()

//@desc Adding router to app routes
routes.use('/user', UserRouter)
routes.use('/category', CategoryRouter)

export default routes
