import { check } from 'express-validator'
import ValidatorMiddleware from '../../middleware/validator_middleware'
import Course from '../../models/course_model'
import User from '../../models/user_model'

const AddCourseToUserMiddleware = [
  check('id').isMongoId().withMessage('Invalid User Id'),
  check('id')
    .notEmpty()
    .withMessage('You must enter a id')
    .custom(async (val, { req }) => {
      const user = await User.findById(req?.params?.id)
      if (!user) {
        throw new Error('User not found')
      }
      return true
    }),
  check('course')
    .notEmpty()
    .withMessage('Please enter course id')
    .custom(async (val, { req }) => {
      const course = await Course.findById(req.body.course)
      if (!course) {
        throw new Error('Course not found')
      }
      return true
    }),
  ValidatorMiddleware,
]

export default AddCourseToUserMiddleware
