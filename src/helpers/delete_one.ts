import asyncHandler from 'express-async-handler'

const DeleteOne = (Model: any) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const document = await Model.findByIdAndDelete(id)
    if (!document) {
      res.status(404).json({
        status: req.t('errorStatus'),
        message: req.t('errorNotFoundId', {
          name: Model.collection.collectionName,
          id: req.params.id,
        }),
      })
      return
    }
    //Trigger remove event when we update
    await document.remove()
    res.status(200).json({
      message: `document Deleted Successfully`,
    })
  })

export default DeleteOne
