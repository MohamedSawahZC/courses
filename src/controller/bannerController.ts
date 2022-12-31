import CreateOne from '../helpers/create_one'
import GetOne from '../helpers/get_one'
import GetAll from '../helpers/get_all'
import UpdateOne from '../helpers/update_one'
import DeleteOne from '../helpers/delete_one'
import Banner from '../models/banner_model'

// @desc Create Banner
// @route POST /api/v1/Banner
// @access Protected/Banner
const CreateBanner = CreateOne(Banner)

// @desc Delete Banner
// @route Delete /api/v1/Banner
// @access Protected/Banner
const DeleteBanner = DeleteOne(Banner)

// @desc Update Banner
// @route PUT /api/v1/Banner/:id
// @access Protected/Banner
const UpdateBanner = UpdateOne(Banner)
// @desc Get Banner
// @route Get /api/v1/Banner/:id
// @access Protected/Banner
const GetBanner = GetOne(Banner)

// @desc Get Banner
// @route Get /api/v1/Banner
// @access Protected/Banner
const GetAllBanner = GetAll(Banner)

export { CreateBanner, GetBanner, GetAllBanner, UpdateBanner, DeleteBanner }
