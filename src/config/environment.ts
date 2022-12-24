import dotenv from 'dotenv'

//@desc dotenv enable configuration
dotenv.config()

class Environment {
  static Development = process.env.DEVELOPMENT
  static Production = process.env.PRODUCTION
  static QualityAssurance = process.env.QUALITYASSURANCE
  static Testing = process.env.TESTING
}

export default Environment
