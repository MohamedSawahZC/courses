import { Schema, model } from 'mongoose'
import IBanner from '../interfaces/banner_interface'

//@desc Create mongoose schema

const bannerSchema = new Schema<IBanner>({
  image: [{ type: String, required: true }],
})

//@desc Create mongoose model
const Banner = model<IBanner>('Banner', bannerSchema)

export default Banner
