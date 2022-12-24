import dotenv from 'dotenv'

//@desc dotenv enable configuration
dotenv.config()

class Database {
  static Production = process.env.DATABASE_PRODUCTION
  static Development = process.env.DATABASE_DEVELOPMENT
  static QualityAssurance = process.env.DATABASE_QUALITY_ASSURANCE
  static Testing = process.env.DATABASE_TESTING
}

export default Database
