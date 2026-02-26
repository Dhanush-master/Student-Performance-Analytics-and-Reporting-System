import { students } from '../data/students'

export function fetchStudents(){
  return Promise.resolve(students)
}

export function fetchStudentById(id){
  const s = students.find(x => x.id === Number(id))
  return Promise.resolve(s)
}
