import React, { useState, useEffect } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'
import StudentService from '../api/StudentService'

const AddStudent = () => {
    const [fullName, setFullName] = useState('')
    const [pointNumberOne, setPointNumberOne] = useState('')
    const [pointNumberTwo, setPointNumberTwo] = useState('')
    const [pointNumberThree, setPointNumberThree] = useState('')

    const history = useNavigate()
    const {id} = useParams()

    const saveUpdateStudent = (e) => {
        e.preventDefault()

        const student = { fullName, pointNumberOne, pointNumberTwo, pointNumberThree }

        if(id){
            StudentService.updateStudent(id, student).then((response) => {
                history.push('/students')
            }).catch(error => {
                console.log(error)
            })     
        } else {
            StudentService.createEmployee(student).then((response) =>{
                console.log(response.data)  
                history.push('/students')
    
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        StudentService.getStudent(id).then((response) => {
            setFullName(response.data.fullName)
            setPointNumberOne(response.data.pointNumberOne)
            setPointNumberTwo(response.data.pointNumberTwo)
            setPointNumberThree(response.data.pointNumberThree)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    const title = () => {
        if (id) {
            return <h2 className='text-align'>Update student</h2>
        } else {
            return <h2 className='text-align'>Add student</h2>
        }
    }
  return (
    <div>
           <br/><br />
           <div className = 'container'>
                <div className = 'row'>
                    <div className = 'card col-md-6 offset-md-3 offset-md-3'>
                       {
                           title()
                       }
                        <div className = 'card-body'>
                            <form>
                                <div className = 'form-group mb-2'>
                                    <label className = 'form-label'> Full Name :</label>
                                    <input
                                        type = 'text'
                                        placeholder = 'Enter fullName'
                                        name = 'fullName'
                                        className = 'form-control'
                                        value = {fullName}
                                        onChange = {(e) => setFullName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = 'form-group mb-2'>
                                    <label className = 'form-label'> Point NumberOne :</label>
                                    <input
                                        type = 'text'
                                        placeholder = 'Enter point number one'
                                        name = 'pointNumberOne'
                                        className = 'form-control'
                                        value = {pointNumberOne}
                                        onChange = {(e) => setPointNumberOne(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = 'form-group mb-2'>
                                    <label className = 'form-label'> Point Number Two :</label>
                                    <input
                                        type = 'text'
                                        placeholder = 'Enter point number two'
                                        name = 'pointNumberTwo'
                                        className = 'form-control'
                                        value = {pointNumberTwo}
                                        onChange = {(e) => setPointNumberTwo(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = 'form-group mb-2'>
                                    <label className = 'form-label'> Point Number Three :</label>
                                    <input
                                        type = 'text'
                                        placeholder = 'Enter point number three'
                                        name = 'pointNumberThree'
                                        className = 'form-control'
                                        value = {pointNumberThree}
                                        onChange = {(e) => setPointNumberThree(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = 'btn btn-success' onClick = {(e) => saveUpdateStudent(e)}>Submit </button>
                                <Link to='/employees' className='btn btn-danger'> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
  )
}

export default AddStudent