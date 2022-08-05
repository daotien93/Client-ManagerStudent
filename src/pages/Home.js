import React from 'react'
import AddStudent from '../components/AddStudent'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ListStudent from '../components/ListStudent'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <Router>
      <Header />
      <div className='container'>
        <Routes>
            <Route exact path="/" element={<ListStudent />}/>
            <Route exact path="/students" element={<ListStudent />}/>
            <Route exact path="/add-student" element={<AddStudent />}/>
            <Route exact path="/edit-student/:id" element={<AddStudent />}/>
        </Routes>
      </div>
    </Router>
    <Footer />
    </div>
  )
}

export default Home