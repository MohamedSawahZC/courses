import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

//@desc Create mongoose schema

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: {
    default: Role.user,
  },
  image: { type: String, required: true },
  phone: { type: String, required: true },
})

//@desc Create mongoose model
const User = model<IUser>('User', userSchema)

//@desc Handle presave password change to encrypted
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  // Hashing user password
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

export default User
