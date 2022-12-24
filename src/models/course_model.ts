import { Schema, model } from 'mongoose'
import ICourse from '../interfaces/course_interface'

//@desc Create mongoose schema

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
})

//@desc Populate data in category field "to show data with reference"
courseSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'category',
    select: 'title image _id',
  })
  next()
})

//@desc Virtual populate data from lecture colllections
courseSchema.virtual('lectures', {
  ref: 'Lecture',
  localField: '_id',
  foreignField: 'course',
})

//@desc Create mongoose model
const Course = model<ICourse>('Course', courseSchema)

export default Course
