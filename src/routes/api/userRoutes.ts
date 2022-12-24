import express from 'express'
import { CreateUser, GetAllUser, GetUser } from '../../controller/userControlller'
import CreateUserMiddleware from '../../validators/user/create_user'

//@desc Initialize our router
const UserRouter = express.Router()

//@desc Our routes

UserRouter.route('/').post(CreateUserMiddleware, CreateUser).get(GetAllUser);
UserRouter.route('/:id').get(GetUser)

export default UserRouter
