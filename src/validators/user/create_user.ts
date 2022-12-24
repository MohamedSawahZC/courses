import bcrypt from 'bcrypt'
import { check, body } from 'express-validator'
import ValidatorMiddleware from '../../middleware/validator_middleware'
import User from '../../models/user_model'

const CreateUserMiddleware = [
  //@desc Name validations
  check('name')
    .notEmpty()
    .withMessage('User required in creation')
    .isLength({ min: 3 })
    .withMessage('Too short name'),

  //@desc Email validations
  check('email')
    .notEmpty()
    .withMessage('Email required')
    .isEmail()
    .withMessage('Invalid email address')
    .custom((val) =>
      User.findOne({ email: val }).then((user) => {
        if (user) {
          return Promise.reject(new Error('E-mail already in user'))
        }
      })
    ),
  //@desc Password validations
  check('password')
    .notEmpty()
    .withMessage('Password required in password creation')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
    .custom((password, { req }) => {
      if (password !== req.body.passwordConfirm) {
        throw new Error('Password Confirmation incorrect')
      }
      return true
    }),
  //@desc Password Confirm validations
  check('passwordConfirm')
    .notEmpty()
    .withMessage('Password confirmation required'),
  check('phone')
    .optional()
    .isMobilePhone(['ar-EG', 'ar-SA'])
    .withMessage('Invalid phone number only accepted Egy and SA Phone numbers'),
  check('image').optional(),
  check('role').optional(),
  ValidatorMiddleware,
]

export default CreateUserMiddleware
