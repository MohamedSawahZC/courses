import jwt from 'jsonwebtoken'
import Config from '../config/config'

const GenerateToken = (payload: any) =>
  jwt.sign({ userId: payload }, Config.SECRET_KEY, {
    expiresIn: Config.JWT_EXPIRE_TIME,
  })

export default GenerateToken
