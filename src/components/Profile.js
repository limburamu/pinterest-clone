import React from 'react'
import { Link } from 'react-router-dom';
import ProfileRoute from '../Routes/ProfileRoute';

function Profile() {
  return (
    <div>
        <div>
        <Link to="/profile">Personal Information</Link>
        <Link to="/profile/address">Address Information</Link>
        </div>
        <ProfileRoute />
    </div>
  )
}

export default Profile
