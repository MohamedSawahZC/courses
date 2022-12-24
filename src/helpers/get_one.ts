//@desc Packages imports
import asyncHandler from 'express-async-handler'
import SetImageUrl from './set_image_url'
import express, { Express, Request, Response } from 'express'
import ApiError from '../error/api_error'

const GetOne = (Model: any, populationOption?: any) =>
  asyncHandler(async (req: Request, res: Response, next) => {
    const { id } = req.params
    //1) Build query
    let model = Model.findById(id)
    if (populationOption) {
      model = model.populate(populationOption)
    }
    //2) Execute query
    const document = await model
    if (!document) {
      return next(
        new ApiError(
          req.t('errorNotFoundId', {
            name: model.collection.collectionName,
            id: id,
          }),
          404
        )
      )
    }
    if (document.image) {
      SetImageUrl(document)
    }
    res.status(200).json({
      status: req.t('successStatus'),
      data: model,
    })
  })

export default GetOne
