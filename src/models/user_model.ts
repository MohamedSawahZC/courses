import { Schema, model } from 'mongoose'
import { default as bcrypt } from 'bcrypt'
import IUser from '../interfaces/user_interface'
import Role from '../interfaces/role_interface'

//@desc Create mongoose schema

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: Role, default: Role.user },
  image: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  lectures: [{ type: Schema.Types.ObjectId, ref: 'Lecture' }],
})

//@desc Handle presave password change to encrypted
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  } else {
    //@desc Hashing user password
    this.password = await bcrypt.hash(this.password, 12)
    next()
  }
})

//@desc Create mongoose model
const User = model<IUser>('User', userSchema)

export default User
