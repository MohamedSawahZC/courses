import asyncHandler from 'express-async-handler'
import express, { Express, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import Config from '../config/config'
import User from '../models/user_model'

const Protect = asyncHandler(async (req: any, res: Response, next) => {
  //1) Check if token exists, if exists get it
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) {
    res.status(401).json({
      status: req.t('errorStatus'),
      message: req.t('unauthorized'),
    })
    return
  }
  //2) Check if token is valid (Verify token) => expired / changed
  const decoded: any = jwt.verify(token, Config.SECRET_KEY)
  //3) Check if user exists
  const user = await User.findById(decoded.userId)
  if (!user) {
    res.status(401).json({
      status: req.t('errorStatus'),
      message: req.t('unauthorized'),
    })
    return
  }
  //@desc Passing user to next middleware
  req.user = user
  next()
})

export default Protect
