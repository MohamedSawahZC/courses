import Config from '../config/config'

//@desc Method to set full image url

const SetImageUrl = (doc: any) => {
  if (doc.image) {
    const imageUrl: string = `${Config.BASEURL}/${doc.collection.collectionName}/${doc.image}`
    doc.image = imageUrl
  }
}

export default SetImageUrl
