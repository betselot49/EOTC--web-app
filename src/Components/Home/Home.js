import React from "react";
import { Link } from "react-router-dom";
import EOTCHEADER from "../../Assets/Images/EOTCHEADER.gif";
import "./Home.css";
import * as FaIcons from "react-icons/fa";

const Home = ({ renderH }) => {
  return (
    <div>
      <header className="header">
        <div className="header__image">
          <img
            className="header__thumbnail"
            src={EOTCHEADER}
            alt="Ethiopian orthodox church"
          />
        </div>

        <div className="header__background">
          <nav className="navbar">
            <div className="logo">
              <FaIcons.FaChurch className="Logo"/>
              <p className="logo-text">EOTC</p>
            </div>
            <div className="navbar__links">
              <Link className="navbar__item" to="/">
                Home
              </Link>
              <Link className="navbar__item" to="/songs">
                Audios
              </Link>
              <Link className="navbar__item" to="/photogallary">
                Photo galary
              </Link>
              <Link className="navbar__item" to="/videos">
                Videos
              </Link>
              <Link className="navbar__item" to="/links">
                More links
              </Link>
              <Link className="navbar__item" to="/calender">
                Calender
              </Link>
              <Link className="navbar__item" to="/contact">
                Contact
              </Link>
            </div>
          </nav>

          <div className="header__text">
            <FaIcons.FaChurch className="eotc-icon"/>
            <p className="header__eotc">EOTC</p>
            <p className="header__quote">
              " And now these three remain: faith, hope and love. But the
              greatest of these is love. "
            </p>
            <p className="header__verse">1 Corinthians 13:13</p>
          </div>

          <div>
            <button
              className="read__button"
              onClick={() => {
                renderH((home) => !home);
              }}
            >
              Start reading...
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
