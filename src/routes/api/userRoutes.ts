import express from 'express'
import { CreateUser } from '../../controller/userControlller'
import CreateUserMiddleware from '../../validators/user/create_user'

//@desc Initialize our router
const UserRouter = express.Router()

//@desc Our routes

UserRouter.route('/').post(CreateUserMiddleware, CreateUser)

export default UserRouter
