import express from 'express'
import {
  CreateCategory,
  DeleteCategory,
  GetAllCategory,
  GetCategory,
  UpdateCategory,
} from '../../controller/categoryController'
import GeneralUploader from '../../helpers/general_image_uploader'
import ResizeImages from '../../helpers/image_resizer'
import AllowedTo from '../../middleware/authorization_permision'
import Protect from '../../middleware/auth_checker'

//@desc Initialize our router
const CategoryRouter = express.Router()

//@desc Our routes

//Get All , Create User (Register)
CategoryRouter.route('/')
  .post(
    Protect,
    AllowedTo('admin'),
    GeneralUploader,
    ResizeImages('categories'),
    CreateCategory
  )
  .get(Protect, AllowedTo('admin'), GetAllCategory)

//Get one user , Update user
CategoryRouter.route('/:id')
  .get(Protect, AllowedTo('admin'), GetCategory)
  .put(
    Protect,
    AllowedTo('admin'),
    GeneralUploader,
    ResizeImages('categories'),
    UpdateCategory
  )
  .delete(Protect, AllowedTo('admin'), DeleteCategory)

export default CategoryRouter
