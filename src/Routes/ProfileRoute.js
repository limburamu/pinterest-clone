import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Address from '../components/Address';
import Personal from '../components/Personal';

function ProfileRoute() {
  return (
      <Routes>
        <Route path='/' element={<Personal />} />
        <Route path='/address' element={<Address />} />
      </Routes>
  )
}

export default ProfileRoute
