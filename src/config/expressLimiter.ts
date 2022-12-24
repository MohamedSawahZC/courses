import { Request } from 'express'
import rateLimit from 'express-rate-limit'
import Limiter from './limiter'

//@desc rate limit configuration
const limit = rateLimit({
  windowMs: Limiter.ENABLE_REQUEST_AFTER, // 15 minutes
  max: Limiter.MAX_REQUESTS, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: {
    status: 'Error',
    message: 'Too many request this IP, please try again after an 15min',
  },
})

export default limit
