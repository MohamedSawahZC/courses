import Environment from './environment'
import dotenv from 'dotenv'
import Database from './database'
import BaseURL from './base'

//@desc dotenv enable configuration
dotenv.config()

class Config {
  static PORT = process.env.PORT || 3000
  static ENVIRONMENT = Environment.Development
  static DATABASE = Database.Development
  static BASEURL = BaseURL.Development
  static VERSION = 'V1'
  static SECRET_KEY: string = process.env.SECRET_KEY || 'secretkey-default'
  static JWT_EXPIRE_TIME = process.env.JWT_EXPIRE_TIME
}

export default Config
