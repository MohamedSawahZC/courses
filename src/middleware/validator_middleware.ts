import { validationResult } from 'express-validator'
import { Request, Response } from 'express'

const ValidatorMiddleware = (req: Request, res: Response, next: any) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

export default ValidatorMiddleware
