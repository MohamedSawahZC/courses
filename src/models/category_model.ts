import { Schema, model } from 'mongoose'
import ICategory from '../interfaces/category_interface'

//@desc Create mongoose schema

const categorySchema = new Schema<ICategory>({
  title: { type: String, required: true },
  image: { type: String, required: true },
})

//@desc Create mongoose model
const Category = model<ICategory>('Category', categorySchema)

export default Category
