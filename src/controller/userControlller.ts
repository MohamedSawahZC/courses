import User from '../models/user_model'
import CreateOne from '../helpers/create_one'

const CreateUser = CreateOne(User)

export { CreateUser }
