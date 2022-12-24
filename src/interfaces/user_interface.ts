import Role from './role_interface'

interface IUser {
  name: string
  email: string
  image: string
  phone: string
  password: string
  role: Role
}

export default IUser
