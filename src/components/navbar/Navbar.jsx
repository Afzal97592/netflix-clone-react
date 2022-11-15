import React, { useState } from 'react'
import './Nabvar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
  const[isScrolled, setIsScrolled] = useState(false)
 // console.log(window.pageYOffset)
 window.onscroll = () =>{
  setIsScrolled(window.pageYOffset === 0 ? false : true);
  return () => (window.onscroll = null);
 };
 console.log(isScrolled)
  return (
    <div className={isScrolled? "navbar scrolled" : "navbar"}>
      <div className="container">
          <div className="left">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="logo" />

           <span>HomePage</span>
           <span>Series</span>
           <span>Movies</span>
           <span>New And Popular</span>
           <span>My List</span>
          </div>

          <div className="right">
            <SearchIcon className='icon' />
            <span>KID</span>
            <NotificationsIcon className='icon' />
            <img src="https://lh3.googleusercontent.com/q0OUmgCrE8BnxbpbUOdVpmDOTz12Kec7Z_WpvWAMzw9VFNLK_lqiCqi6K4OLifLMnBsa38mBIBFIriMSAAg2FgLCwPDVCvl1tssuIciDb4sblXI=w960-rj-nu-e365" alt="" />

            <div className="profile">
              <ArrowDropDownIcon className='icon' />
              <div className="option">
                 <span>Settings</span>
                 <span>Logout</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar