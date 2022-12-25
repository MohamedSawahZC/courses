//@desc Packages imports
import asyncHandler from 'express-async-handler'
import SetImageUrl from './set_image_url'
import express, { Express, Request, Response } from 'express'
import GenerateToken from './generate_token'
import SanitizeUser from '../sanitizers/user_sanitizer'

//1) Method create document
const CreateOne = (Model: any) =>
  asyncHandler(async (req: Request, res: Response) => {
    const model = await Model.create(req.body)
    SetImageUrl(model)
    if (model.collection.collectionName == 'users') {
      res.status(201).json({
        status: req.t('successStatus'),
        message: req.t('createMessage', {
          name: model.collection.collectionName,
        }),
        data: SanitizeUser(model),
        token: GenerateToken(model._id),
      })
    } else {
      res.status(201).json({
        status: req.t('successStatus'),
        message: req.t('createMessage', {
          name: model.collection.collectionName,
        }),
        data: model,
      })
    }
  })

export default CreateOne
