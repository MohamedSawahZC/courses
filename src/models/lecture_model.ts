import { Schema, model } from 'mongoose'
import ILecture from '../interfaces/lecture_interface'

//@desc Create mongoose schema

const lectureSchema = new Schema<ILecture>({
  title: { type: String, required: true },
  video: { type: String, required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
})

//@desc Create mongoose model
const Lecture = model<ILecture>('Lecture', lectureSchema)

export default Lecture
