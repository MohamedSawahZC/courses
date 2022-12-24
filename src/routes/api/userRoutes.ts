import express from 'express'
import {
  CreateUser,
  GetAllUser,
  GetUser,
  LoginUser,
} from '../../controller/userControlller'
import Protect from '../../middleware/auth_checker'
import CreateUserMiddleware from '../../validators/user/create_user'

//@desc Initialize our router
const UserRouter = express.Router()

//@desc Our routes

UserRouter.route('/')
  .post(CreateUserMiddleware, CreateUser)
  .get(Protect, GetAllUser)
UserRouter.route('/:id').get(GetUser)
UserRouter.post('/login', LoginUser)

export default UserRouter
