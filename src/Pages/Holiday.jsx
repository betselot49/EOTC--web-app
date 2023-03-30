import {React, useState, useRef} from 'react'
import "./Holiday.css"
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";


let holidayBank = [
  {
    title: "Nativity celebration in Lalibela",
    link: "https://www.youtube.com/embed/GceL8l6yRyg"
  },
  {
    title: "Epiphany celebration in Lalibela",
    link: "https://www.youtube.com/embed/qvspWit8tbk"
  },
  {
    title: "Epiphany celebration in Gonder",
    link: "https://www.youtube.com/embed/v_2T_4Jfl9s"
  },
  {
    title: "Epiphany celebration in Jerusalem",
    link: "https://www.youtube.com/embed/62i4Cm98aJQ"
  },
  {
    title: "Exaltation of the Cross Celebration in Jerusalem",
    link: "https://www.youtube.com/embed/WNvm4FgiijQ"
  },
  {
  title: "Timket Celebration in Addis Ababa_Ethiopia",
  link: "https://www.youtube.com/embed/MOW-BTHytgY"
  },
  ,
  {
    title: "Meskel celebration in Addis Ababa",
    link: "https://www.youtube.com/embed/nK53iwO6bq8"
  },
  {
    title: "Christmas celebration at Miskaye Hizunan Medhanealem church",
    link: "https://www.youtube.com/embed/56AsutGXgQ8"
  }
  
]

let preachBank = [
  {
    title: "Judgment day",
    link: "https://www.youtube.com/embed/wStxTnIFfaI"
  },
  {
    title: "The Ascension",
    link: "https://www.youtube.com/embed/_4n95GxyQuE"
  },
  {
    title: "The Last super",
    link: "https://www.youtube.com/embed/DAx-gzcl7gU"
  },
  {
    title: "Transfiguration",
    link: "https://www.youtube.com/embed/ZLq0myMBG6k"
  },
  {
    title: "Emmanuel is born",
    link: "https://www.youtube.com/embed/fQGKIjGeqf8"
  },
  {
  title: "The Baptisim of Christ",
  link: "https://www.youtube.com/embed/5RyYOfR0p6g"
  },
  ,
  {
    title: "Meskel celebration in Addis Ababa",
    link: "https://www.youtube.com/embed/nK53iwO6bq8"
  },
  {
    title: "Resurrection animation",
    link: "https://www.youtube.com/embed/eyHiiwTJdCA"
  }
  
]

let churchBank = [
  {
    title: "The Hymn's of St. Yared for the feast of Nativity",
    link: "https://www.youtube.com/embed/1OceAtMIWDI"
  },
  {
    title: "The Hymn's of St. Yared for the feast of St. Stephen",
    link: "https://www.youtube.com/embed/2WXf3RTr4Cs"
  },
  {
    title: "The Hymn's of St. Yared for the feast of Trinity",
    link: "https://www.youtube.com/embed/g_se-j2k6K4"
  },
  {
    title: "The Hymn's of St. Yared for the feast of St. George",
    link: "https://www.youtube.com/embed/3GRQcuA28Uw"
  },
  {
    title: "The Hymn's of St. Yared for the feast of Virgin Mary-from St. Mary",
    link: "https://www.youtube.com/embed/A73i4FIP7As"
  }
  
]




const Holiday = () => {
  let holidayRef = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef()]

  function toggling(index){
    holidayRef[index].classList.toggle("active")
  }

  return (
    <>
    
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

    <div className='mainn'>
      <div>
        <h1 className='ttt' align="center">Holiday Events</h1>
        <div className="containerr" >
        {holidayBank.map((item, index) => {
         return(
          <div className='cardd'>
            <div className="video" ><embed className='embed' type="video/mp4" src={item.link}></embed></div>
            <h5 className='title'>{item.title}</h5>
          </div>

          )
        })}
        </div>
      </div>
      <div>
        <h1 className="ttt" align="center">Preaching Videoes</h1>
        <div className="containerr" >
        {preachBank.map((item, index) => {
         return(
          <div className='cardd'>
            <div className="video" ><embed className='embed' type="video/mp4" src={item.link}></embed></div>
            <h5 className='title'>{item.title}</h5>
          </div>

          )
        })}
        </div>
      </div>
      <div>
        <h1 className="ttt" align="center">Different churches</h1>
        <div className="containerr" >
        {churchBank.map((item, index) => {
         return(
          <div className='cardd'>
            <div className="video" ><embed className='embed' type="video/mp4" src={item.link}></embed></div>
            <h5 className='title'>{item.title}</h5>
          </div>

          )
        })}
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Holiday;