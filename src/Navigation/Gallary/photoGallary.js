import React from 'react'
import gallary from "./../../Assets/Images/maingallery.jpg"
import "./photoGallary.css"
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";

const PhotoGallary = () => {
  return (
    <div>
      <nav className="navbar1">
      <Link to="/">
        <div className="logo1">
          <FaIcons.FaChurch className="Logo1" />
          <p className="logo-text1">EOTC</p>
        </div>
      </Link>
        <div className="navbar__links1">
          <Link className="navbar__item1" to="/">
            Home
          </Link>
          <Link className="navbar__item1" to="/songs">
            Audios
          </Link>
          <Link className="navbar__item1" to="/photogallary">
            Photo galary
          </Link>
          <Link className="navbar__item1" to="/videos">
            Videos
          </Link>
          <Link className="navbar__item1" to="/links">
            More links
          </Link>
          <Link className="navbar__item1" to="/calender">
            Calender
          </Link>
          <Link className="navbar__item1" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
      
        <p className='galary__header'>Photo Gallary</p>
        <div className='gallary__thumnail'>
          <img src={gallary}  alt='gallary image'/>
        </div>
    </div>
  )
}

export default PhotoGallary;
