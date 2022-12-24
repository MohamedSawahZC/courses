import mongoose from 'mongoose'
import Config from './config'

const URI = Config.DATABASE as unknown as string

mongoose.set('strictQuery', true)
const DatabaseConnect = () => {
  mongoose
    .connect(URI)
    .then((result) => {
      console.log(`📅 Mongoose connected 📅`)
    })
    .catch((e) => {
      console.log(e)
    })
}

export default DatabaseConnect
