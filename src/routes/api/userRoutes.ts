import express from 'express'
import * as UserController from '../../controller/userControlller'
import { CreateUser } from '../../controller/userControlller'

//@desc Initialize our router
const UserRouter = express.Router()

//@desc Our routes

UserRouter.route('/').post(CreateUser)

export default UserRouter;
