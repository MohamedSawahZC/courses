import express from 'express'
import {
  CreateLecture,
  DeleteLecture,
  GetAllLecture,
  GetLecture,
  UpdateLecture,
} from '../../controller/lectureController'
import GeneralUploader from '../../helpers/general_image_uploader'
import ResizeImages from '../../helpers/image_resizer'
import AllowedTo from '../../middleware/authorization_permision'
import Protect from '../../middleware/auth_checker'

//@desc Initialize our router
const LectureRouter = express.Router()

//@desc Our routes

//Get All , Create category
LectureRouter.route('/')
  .post(
    Protect,
    AllowedTo('admin'),
    GeneralUploader,
    ResizeImages('lectures'),
    CreateLecture
  )
  .get(Protect, AllowedTo('admin'), GetAllLecture)

//Get one category , Update category
LectureRouter.route('/:id')
  .get(Protect, AllowedTo('admin'), GetLecture)
  .put(
    Protect,
    AllowedTo('admin'),
    GeneralUploader,
    ResizeImages('lectures'),
    UpdateLecture
  )
  .delete(Protect, AllowedTo('admin'), DeleteLecture)

export default LectureRouter
