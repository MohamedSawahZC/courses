import express from 'express'
import {
  CreateUser,
  GetAllUser,
  GetUser,
  LoginUser,
} from '../../controller/userControlller'
import GeneralUploader from '../../helpers/general_image_uploader'
import ResizeImages from '../../helpers/image_resizer'
import AllowedTo from '../../middleware/authorization_permision'
import Protect from '../../middleware/auth_checker'
import UploadSingleImage from '../../middleware/upload_image'
import CreateUserMiddleware from '../../validators/user/create_user'
import GetUserValidator from '../../validators/user/get_user'

//@desc Initialize our router
const UserRouter = express.Router()

//@desc Our routes

//Get All , Create User (Register)
UserRouter.route('/')
  .post(
    GeneralUploader,
    ResizeImages('users'),
    CreateUserMiddleware,
    CreateUser
  )
  .get(Protect, AllowedTo('admin'), GetAllUser)

//Get one user , Update user
UserRouter.route('/:id').get(GetUserValidator, GetUser)

// User login ("auth")
UserRouter.post('/login', LoginUser)

export default UserRouter
