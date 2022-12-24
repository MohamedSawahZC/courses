import User from '../models/user_model'
import CreateOne from '../helpers/create_one'
import GetOne from '../helpers/get_one'
import GetAll from '../helpers/get_all'

// @desc Create User
// @route POSt /api/v1/User
// @access Public/user
const CreateUser = CreateOne(User)

// @desc Get User
// @route Get /api/v1/User/:id
// @access Public/user
const GetUser = GetOne(User)

// @desc Get User
// @route Get /api/v1/User
// @access Public/user
const GetAllUser = GetAll(User, 'User')

export { CreateUser, GetUser, GetAllUser }
