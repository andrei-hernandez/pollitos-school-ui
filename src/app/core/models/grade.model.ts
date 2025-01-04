import {StudentModel} from "./student.model"
import {CourseModel} from "./course.model"

export interface GradeModel {
  id: number;
  student: StudentModel;
  course: CourseModel;
  score: number;
}
