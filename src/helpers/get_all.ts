import SetImageUrl from './set_image_url'
import express, { Express, Request, Response } from 'express'
import ApiFeatures from '../utils/api_features'
import asyncHandler from 'express-async-handler'

const GetAll = (Model: any, modelName = '') =>
  asyncHandler(async (req: Request, res: Response) => {
    let filter: any = {}
    //1- Build query
    const countDocuments = await Model.countDocuments()
    const apiFeatures = new ApiFeatures(Model.find(filter), req.query)
      .paginate(countDocuments)
      .filter()
      .search(modelName)
      .limit()
      .sort()
    //2- Execute query
    const { mongooseQuery, paginationResults } = apiFeatures
    const document = await mongooseQuery
    // Set Images url
    if (Model.collection.collectionName === 'courses') {
      document.forEach((doc: any) => SetImageUrl(doc))
    }
    res
      .status(200)
      .json({ results: document.length, paginationResults, data: document })
  })

export default GetAll
