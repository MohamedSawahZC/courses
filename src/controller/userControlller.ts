import User from '../models/user_model'
import CreateOne from '../helpers/create_one'
import GetOne from '../helpers/get_one'

// @desc Create User
// @route POSt /api/v1/User
// @access Public/user
const CreateUser = CreateOne(User)

// @desc Get User
// @route Get /api/v1/User
// @access Public/user
const GetUser = GetOne(User)

export { CreateUser, GetUser }
