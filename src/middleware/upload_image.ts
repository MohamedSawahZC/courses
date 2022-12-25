import { Request } from 'express'
import multer from 'multer'

const multerOptions = () => {
  //1- Memory Storage engine
  const multerStorage = multer.memoryStorage()
  //======= Multer filter used to filter coming images =====

  const multerFilter = function (req: Request, file: any, cb: any) {
    if (file.mimetype.startsWith('image')) {
      cb(null, true)
    } else {
      //   cb(new ApiError("Only Images allowed", 400), false);
    }
  }

  //1- Disk Storage engine
  const Upload = multer({ storage: multerStorage, fileFilter: multerFilter })

  return Upload
}

const UploadSingleImage = (fieldName: any) => multerOptions().single(fieldName)

/*
========================= Multer Disk storage =======================
Storage type : Disk Storage
Destination : Uploads/Category
extention : for get Image type --> Split the mimtype and get part two
extention example : image/png --split--> [image,png] --[1]--> png
example:-
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Uploads/Category");
  },
  filename: function (req, file, cb) {
    const extention = file.mimetype.split("/")[1];
    const filename = `category-${uuidv4()}-${Date.now()}.${extention}`;
    cb(null, filename);
  },
});
========================================================
*/

export default UploadSingleImage
