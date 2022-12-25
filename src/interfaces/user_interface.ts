import Role from './role_interface'
import { Types } from 'mongoose'
import ICourse from './course_interface'
import ILecture from './lecture_interface'
interface IUser {
  name: string
  email: string
  image: string
  phone: string
  password: string
  role: Role
  courses: Types.DocumentArray<ICourse>
  lectures: Types.DocumentArray<ILecture>
}

export default IUser
