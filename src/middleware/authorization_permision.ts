import asyncHandler from 'express-async-handler'

const AllowedTo = (...roles: any[]) =>
  asyncHandler(async (req: any, res, next) => {
    //1) Access comming roles
    //2) access registered user
    if (!roles.includes(req.user.role)) {
      res.status(403).send({
        status: req.t('errorStatus'),
        message: req.t('denied'),
      })
      return
    } else {
      next()
    }
  })

export default AllowedTo
