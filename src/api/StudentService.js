import axios from 'axios'

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/students'

class ApiStudentService {
    getStudents(){
        return axios.get(STUDENT_BASE_REST_API_URL)
    }

    createStudent(student){
        return axios.post(STUDENT_BASE_REST_API_URL, student)
    }

    getStudentById(studentId){
        return axios.get(STUDENT_BASE_REST_API_URL + '/' + studentId)
    }

    updateStudent(studentId, student){
        return axios.put(STUDENT_BASE_REST_API_URL + '/' + studentId, student)
    }

    deleteStudent(studentId){
        return axios.delete(STUDENT_BASE_REST_API_URL + '/' + studentId)
    }

    searchStudent(student, keyword) {
        return axios.get(STUDENT_BASE_REST_API_URL, keyword, student)
    }
}

export default new  ApiStudentService()