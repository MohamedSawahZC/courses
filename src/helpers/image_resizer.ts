import asyncHandler from 'express-async-handler'
import sharp from 'sharp'
import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

const ResizeImages = (collectionName: string) =>
  asyncHandler(async (req, res, next) => {
    const filename = `${collectionName}-${uuid()}-${Date.now()}`
    if (req.file) {
      const ext = req.file.mimetype.split('/')[1]
      await sharp(req.file.buffer).toFile(
        `uploads/${collectionName}/${filename}.${ext}`
      )
      //Save image into our body
      req.body.image = filename
      next()
    } else {
      next()
    }
  })

export default ResizeImages
