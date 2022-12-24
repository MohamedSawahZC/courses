import ICategory from './category_interface'
import { Types } from 'mongoose'
import ILecture from './lecture_interface'

interface ICourse {
  title: string
  description: string
  image: string
  author: string
  category: Types.DocumentArray<ICategory>
  lecture: Types.DocumentArray<ILecture>
}

export default ICourse
