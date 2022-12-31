import CreateOne from '../helpers/create_one'
import GetOne from '../helpers/get_one'
import GetAll from '../helpers/get_all'
import UpdateOne from '../helpers/update_one'
import DeleteOne from '../helpers/delete_one'
import Lecture from '../models/lecture_model'

// @desc Create Lecture
// @route POST /api/v1/Lecture
// @access Protected/Lecture
const CreateLecture = CreateOne(Lecture)

// @desc Delete Lecture
// @route Delete /api/v1/Lecture
// @access Protected/Lecture
const DeleteLecture = DeleteOne(Lecture)

// @desc Update Lecture
// @route PUT /api/v1/Lecture/:id
// @access Protected/Lecture
const UpdateLecture = UpdateOne(Lecture)
// @desc Get Lecture
// @route Get /api/v1/Lecture/:id
// @access Protected/Lecture
const GetLecture = GetOne(Lecture)

// @desc Get Lecture
// @route Get /api/v1/Lecture
// @access Protected/Lecture
const GetAllLecture = GetAll(Lecture)

export {
  CreateLecture,
  DeleteLecture,
  UpdateLecture,
  GetLecture,
  GetAllLecture,
}
