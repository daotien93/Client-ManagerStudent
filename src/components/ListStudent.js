import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ApiStudentService  from '../api/StudentService'

const ListStudent = () => {
    const [students, setStudents] = useState([])
    const [inputValue, setInputValue] = useState('')
    const countPoint = 3

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        getAllStudents()
    }, [])

    const getAllStudents = () => {
       ApiStudentService.getStudents().then((response) => {
            setStudents(response.data)
       }).catch(error => {
            console.log(error)
       }) 
    }

    const onDeleteStudent = (studentId) => {
        ApiStudentService.deleteEmployee(studentId).then((response) => {
            getAllStudents(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const onSearchPoint = (e, keyword) => {
        e.preventDeafault()
        ApiStudentService.searchStudent(keyword).then((response) => {
            getAllStudents(response.data)
        }).catch(error => {
            console.log(error)
        }) 
    }

    const onClearSerchInput = (e) => {
        e.preventDeafault()
        setInputValue('')
    }

  return (
    <div className='container'>
            <h2 className = 'text-center'> List students </h2>
            <div class='form-group mb-2'>
                            <input 
                                 type='text'
                                 class='form-control' 
                                 name='search' 
                                 size='50' 
                                 placeholder='Search GPA'
                                 value={inputValue}
                                 onChange={handleChange}
                            />
                            <button
                                 type='button'
                                 name='search' 
                                 class='btn btn-info my-2 text-center mr-2'
                                 onClick={onSearchPoint}
                                 >
                                Search
                            </button>   
                            <button 
                                type='reset'
                                 class='btn btn-secondary text-center ml-2' 
                                 style={{marginLeft:'10px'}}
                                 onClick={onClearSerchInput}
                            >Clear</button>
            </div>
            <Link to = '/add-student' className = 'btn btn-primary mb-2' > Add Student </Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th> Full Name </th>
                    <th> Point Number One</th>
                    <th> Point Number Two</th>
                    <th> Point Number Three</th>
                    <th> GPA </th>
                </thead>
                <tbody>
                    {
                        students.map(
                            student =>
                            <tr key={student.id}> 
                                <td>{student.fullName}</td>
                                <td>{student.pointNumberOne}</td>
                                <td>{student.pointNumberTwo}</td>
                                <td>{student.pointNumberThree}</td>
                                <td>{(student.pointNumberOne + student.pointNumberTwo + student.pointNumberThree) / countPoint}</td>
                                <td>
                                    <Link 
                                        className='btn btn-info'
                                        to={`/edit-student/${student.id}`
                                    }>
                                    Update
                                    </Link>
                                    <button 
                                        className = 'btn btn-danger'
                                        onClick = {() => onDeleteStudent(student.id)
                                    }
                                    style = {{marginLeft:'10px'}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}

export default ListStudent