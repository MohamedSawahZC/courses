import asyncHandler from 'express-async-handler'
import User from '../models/user_model'
import CreateOne from '../helpers/create_one'
import GetOne from '../helpers/get_one'
import GetAll from '../helpers/get_all'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import GenerateToken from '../helpers/generate_token'
import SanitizeUser from '../sanitizers/user_sanitizer'

// @desc Login User
// @route POST /api/v1/User
// @access Public/user
const LoginUser = asyncHandler(async (req: Request, res: Response, next) => {
  const user = await User.findOne({ email: req.body.email })
  if (!user || !(await bcrypt.compareSync(req.body.password, user.password))) {
    res.status(401).json({
      status: req.t('errorStatus'),
      message: req.t('loginError'),
    })
    return
  }
  //5) Send response to the client side
  res.status(200).json({
    status: req.t('successStatus'),
    data: SanitizeUser(user),
    token: GenerateToken(user._id),
  })
})

// @desc Create User
// @route POST /api/v1/User
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

export { CreateUser, GetUser, GetAllUser, LoginUser }
