const SanitizeUser = function (user: any) {
  return {
    _id: user._id,
  }
}

export default SanitizeUser
