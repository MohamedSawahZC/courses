import express from 'express'
import {
  CreateCourse,
  DeleteCourse,
  GetAllCourse,
  GetCourse,
  UpdateCourse,
} from '../../controller/courseController'
import GeneralUploader from '../../helpers/general_image_uploader'
import ResizeImages from '../../helpers/image_resizer'
import AllowedTo from '../../middleware/authorization_permision'
import Protect from '../../middleware/auth_checker'

//@desc Initialize our router
const CourseRouter = express.Router()

//@desc Our routes

//Get All , Create course
CourseRouter.route('/')
  .post(
    Protect,
    AllowedTo('admin'),
    GeneralUploader,
    ResizeImages('courses'),
    CreateCourse
  )
  .get(Protect, AllowedTo('admin'), GetAllCourse)

//Get one course , Update course
CourseRouter.route('/:id')
  .get(Protect, AllowedTo('admin'), GetCourse)
  .put(
    Protect,
    AllowedTo('admin'),
    GeneralUploader,
    ResizeImages('courses'),
    UpdateCourse
  )
  .delete(Protect, AllowedTo('admin'), DeleteCourse)

export default CourseRouter
