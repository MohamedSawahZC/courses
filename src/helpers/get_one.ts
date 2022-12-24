//@desc Packages imports
import asyncHandler from 'express-async-handler'
import SetImageUrl from './set_image_url'
import { Request, Response } from 'express'

const GetOne = (Model: any, populationOption?: any) =>
  asyncHandler(async (req: Request, res: Response, next) => {
    const { id } = req.params
    //1) Build query
    let model = await Model.findById(id)
    if (populationOption) {
      model = model.populate(populationOption)
    }
    //2) Execute query
    const document = await model
    if (!document) {
      res.status(404).json({
        status: req.t('errorStatus'),
        message: req.t('errorNotFoundId', {
          name: Model.collection.collectionName,
          id: id,
        }),
      })
      return
    }
    if (document) {
      if (document.image) {
        SetImageUrl(document)
      }
    }
    //return results
    res.status(200).json({
      status: req.t('successStatus'),
      data: model,
    })
  })

export default GetOne
