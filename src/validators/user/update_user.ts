import bcrypt from 'bcrypt'
import { check, body } from 'express-validator'
import ValidatorMiddleware from '../../middleware/validator_middleware'
import User from '../../models/user_model'

const UpdateUserMiddleware = [
  check('id').isMongoId().withMessage('Invalid User Id'),
  body('name').optional(),
  check('email')
    .optional()
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
  check('phone')
    .optional()
    .isMobilePhone(['ar-EG', 'ar-SA'])
    .withMessage('Invalid phone number only accepted Egy and SA Phone numbers'),
  check('image').optional(),
  check('role').optional(),
  ValidatorMiddleware,
]

export default UpdateUserMiddleware


// check('password')
// .notEmpty()
// .withMessage('You must enter a password')
// .custom(async (val, { req }) => {
//   //1) check if current password is valid (Verify Password )
//   const user = await User.findById(req?.params?.id)
//   if (!user) {
//     throw new Error('User not found')
//   }
//   const isCorrect = await bcrypt.compareSync(
//     req.body.currentPassword,
//     user.password
//   )
//   if (!isCorrect) {
//     throw new Error('Current password is incorrect')
//   }
//   //2) Verify Password confirm
//   if (val !== req.body.passwordConfirm) {
//     throw new Error('Password Confirmation incorrect')
//   }
//   return true
// }),