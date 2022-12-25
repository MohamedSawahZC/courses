import asyncHandler from 'express-async-handler'
import SetImageUrl from './set_image_url'
import { Request, Response } from 'express'

const UpdateOne = (Model: any, password?: Boolean) =>
  asyncHandler(async (req, res, next) => {
    let document
    if (Model.collection.collectionName == 'users' && password == true) {
      document = await Model.findByIdAndUpdate(
        req.params.id,
        req.body.password,
        {
          new: true,
        }
      )
    }
    document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    if (!document) {
      res.status(404).json({
        status: req.t('errorStatus'),
        message: req.t('errorNotFoundId', {
          name: Model.collection.collectionName,
          id: req.params.id,
        }),
      })
      return
    }
    //Trigger save event when we update
    await document.save()
    SetImageUrl(document)
    res.status(200).json({
      status: req.t('successStatus'),
      data: document,
    })
  })

export default UpdateOne
