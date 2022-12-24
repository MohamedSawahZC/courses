import dotenv from 'dotenv'

//@desc dotenv enable configuration
dotenv.config()

class BaseURL {
  static Production = process.env.BASE_PRODUCTION
  static Development = process.env.BASE_DEVELOPMENT
  static QualityAssurance = process.env.BASE_QUALITY_ASSURANCE
  static Testing = process.env.BASE_TESTING
}

export default BaseURL
