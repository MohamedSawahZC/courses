import express from 'express'
import {
  CreateBanner,
  DeleteBanner,
  GetAllBanner,
  GetBanner,
  UpdateBanner,
} from '../../controller/bannerController'
import GeneralUploader from '../../helpers/general_image_uploader'
import ResizeImages from '../../helpers/image_resizer'
import AllowedTo from '../../middleware/authorization_permision'
import Protect from '../../middleware/auth_checker'

//@desc Initialize our router
const BannerRouter = express.Router()

//@desc Our routes

//Get All , Create category
BannerRouter.route('/')
  .post(
    Protect,
    AllowedTo('admin'),
    GeneralUploader,
    ResizeImages('banners'),
    CreateBanner
  )
  .get(Protect, AllowedTo('admin'), GetAllBanner)

//Get one category , Update category
BannerRouter.route('/:id')
  .get(Protect, AllowedTo('admin'), GetBanner)
  .put(
    Protect,
    AllowedTo('admin'),
    GeneralUploader,
    ResizeImages('banners'),
    UpdateBanner
  )
  .delete(Protect, AllowedTo('admin'), DeleteBanner)

export default BannerRouter
