import CreateOne from '../helpers/create_one'
import GetOne from '../helpers/get_one'
import GetAll from '../helpers/get_all'
import UpdateOne from '../helpers/update_one'
import DeleteOne from '../helpers/delete_one'
import Course from '../models/course_model'

// @desc Create Course
// @route POST /api/v1/Course
// @access Protected/Course
const CreateCourse = CreateOne(Course)

// @desc Delete Course
// @route Delete /api/v1/Course
// @access Protected/Course
const DeleteCourse = DeleteOne(Course)

// @desc Update category
// @route PUT /api/v1/Course/:id
// @access Protected/Course
const UpdateCourse = UpdateOne(Course)
// @desc Get Course
// @route Get /api/v1/Course/:id
// @access Protected/Course
const GetCourse = GetOne(Course)

// @desc Get Course
// @route Get /api/v1/Course
// @access Protected/Course
const GetAllCourse = GetAll(Course)

export { CreateCourse, GetCourse, GetAllCourse, UpdateCourse, DeleteCourse }
