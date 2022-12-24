/*============== Time calculation =================
15 is minutes and we nee to convert to milliseconds
so each minute = 60 seconds and each second 
= 1000 milliseconds
so 15 minutes * 60 seconds * 1000 milliseconds
=================================================*/

class Limiter {
  static MAX_REQUESTS = 1000
  static ENABLE_REQUEST_AFTER = 15 * 60 * 1000
}

export default Limiter
