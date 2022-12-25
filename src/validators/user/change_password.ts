import bcrypt from 'bcrypt'
import { check, body } from 'express-validator'
import ValidatorMiddleware from '../../middleware/validator_middleware'
import User from '../../models/user_model'

const ChangeUserPasswordMiddleware = [
  check('id').isMongoId().withMessage('Invalid User Id'),
  body('currentPassword')
    .notEmpty()
    .withMessage('You must enter currentPassword'),
  body('passwordConfirm')
    .notEmpty()
    .withMessage('You must enter confirm password'),
  body('password')
    .notEmpty()
    .withMessage('You must enter a password')
    .custom(async (val, { req }) => {
      //1) check if current password is valid (Verify Password )
      const user = await User.findById(req?.params?.id)
      if (!user) {
        throw new Error('User not found')
      }
      const isCorrect = await bcrypt.compareSync(
        req.body.currentPassword,
        user.password
      )
      if (!isCorrect) {
        throw new Error('Current password is incorrect')
      }
      //2) Verify Password confirm
      if (val !== req.body.passwordConfirm) {
        throw new Error('Password Confirmation incorrect')
      }
      return true
    }),
  ValidatorMiddleware,
]

export default ChangeUserPasswordMiddleware
