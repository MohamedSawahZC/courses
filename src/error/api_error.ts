// @desc This class is responsible about operational error(errors that I can predict)

class ApiError extends Error {
  message: any
  statusCode: any
  status: any
  isOperational: boolean
  constructor(message: any, statusCode: any) {
    super(message)
    this.statusCode = statusCode
    this.status = statusCode.startsWith(4) ? 'fail' : 'error'
    this.isOperational = true
  }
}


export default ApiError;