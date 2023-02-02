import React from 'react'
import '../styles/HeaderStyles.css';
import PinterestIcon from "@material-ui/icons/Pinterest";
import TextsmsIcon from "@material-ui/icons/Textsms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import SearchIcon from "@material-ui/icons/Search";


function Header() {
  return (
    <div className='header'>
      <div className='pinterst'>
        <PinterestIcon />
      </div>
      <div>
        <a href='/'>Home</a>
      </div>
      <div className="searchWrapper">
        <div className="searchBarWrapper">
          <SearchIcon />
          <form>
            <input type="text" />
            <button type='submit'></button>
          </form>
        </div>
      </div>
      <div className='icons'>
        <NotificationsIcon />
        <TextsmsIcon />
        <FaceIcon />
      </div>
    </div>
  )
}

export default Header
