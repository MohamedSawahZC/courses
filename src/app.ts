//@desc Packages Imports
import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import i18next from 'i18next'
import Backend from 'i18next-fs-backend'
import middleware from 'i18next-http-middleware'
import helmet from 'helmet'
import Config from './config/config'
import Environment from './config/environment'
import limit from './config/expressLimiter'
import compression from 'compression'
import mongoSanitize from 'express-mongo-sanitize'
import SwaggerUi from 'swagger-ui-express'
import SwaggerConfig from '../swagger.json'
import routes from './routes'
//@desc Express instance
const app: Express = express()

//@desc I18next configuration (for multi language support)
i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: __dirname + '/locales/{{lng}}/translation.json',
    },
  })

//@desc Apply request limit
app.use('*', limit)

//@desc Enable multi language middleware
app.use(middleware.handle(i18next))

//@desc Apply request compression for enhance performance
app.use(compression())

//@desc Apply cors "Access-Control-Allow-Origin" to our server
app.use(cors())

//@desc Apply mongo sanitizer for secure from request queries
app.use(mongoSanitize())

//@desc Apply helmet to secure express app by setting headers
app.use(helmet())

//@desc Apply our development configuration
if (Config.ENVIRONMENT === Environment.Development) {
  //1) Apply requests logger
  app.use(morgan('dev'))
}

//@desc Apply express parser to parse json request
app.use(express.json())

//@desc Apply Swagger documentation
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(SwaggerConfig))

//@des use our routes
app.use(`/api/${Config.VERSION}`,routes)

//@desc Handle invalid end points requests
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: req.t('errorStatus'),
    message: req.t('error404'),
  })
})

export default app
