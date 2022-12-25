import asyncHandler from 'express-async-handler'
import SetImageUrl from './set_image_url'
import { Request, Response } from 'express'

exports.UpdateOne = (Model: any) =>
  asyncHandler(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
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
