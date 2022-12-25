import { check } from 'express-validator'
import ValidatorMiddleware from '../../middleware/validator_middleware'

const IdUserValidator = [
  check('id').isMongoId().withMessage('Invalid User Id'),
  ValidatorMiddleware,
]

export default IdUserValidator
