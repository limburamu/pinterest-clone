import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home'
import Profile from '../components/Profile'

function MainRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default MainRoute
