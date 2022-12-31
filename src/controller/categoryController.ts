import CreateOne from '../helpers/create_one'
import GetOne from '../helpers/get_one'
import GetAll from '../helpers/get_all'
import UpdateOne from '../helpers/update_one'
import DeleteOne from '../helpers/delete_one'
import Category from '../models/category_model'

// @desc Create category
// @route POST /api/v1/category
// @access Protected/category
const CreateCategory = CreateOne(Category)

// @desc Delete category
// @route Delete /api/v1/category
// @access Protected/category
const DeleteCategory = DeleteOne(Category)

// @desc Update category
// @route PUT /api/v1/category/:id
// @access Protected/category
const UpdateCategory = UpdateOne(Category)
// @desc Get category
// @route Get /api/v1/category/:id
// @access Protected/category
const GetCategory = GetOne(Category)

// @desc Get category
// @route Get /api/v1/category
// @access Protected/category
const GetAllCategory = GetAll(Category)

export {
  CreateCategory,
  GetCategory,
  GetAllCategory,
  UpdateCategory,
  DeleteCategory,
}
