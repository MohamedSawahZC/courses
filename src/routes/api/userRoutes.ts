import express from 'express'
import {
  ChangeUserPassword,
  CreateUser,
  DeleteUser,
  GetAllUser,
  GetUser,
  LoginUser,
  UpdateUser,
} from '../../controller/userControlller'
import GeneralUploader from '../../helpers/general_image_uploader'
import ResizeImages from '../../helpers/image_resizer'
import AllowedTo from '../../middleware/authorization_permision'
import Protect from '../../middleware/auth_checker'
import UploadSingleImage from '../../middleware/upload_image'
import ChangeUserPasswordMiddleware from '../../validators/user/change_password'
import CreateUserMiddleware from '../../validators/user/create_user'
import IdUserValidator from '../../validators/user/id_user'
import UpdateUserMiddleware from '../../validators/user/update_user'

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
UserRouter.route('/:id')
  .get(IdUserValidator, GetUser)
  .put(GeneralUploader, ResizeImages('users'), UpdateUserMiddleware, UpdateUser)
  .put(ChangeUserPasswordMiddleware, ChangeUserPassword)
  .delete(Protect, AllowedTo('admin'), IdUserValidator, DeleteUser)

// User login ("auth")
UserRouter.post('/login', LoginUser)

export default UserRouter
