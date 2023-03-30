import React from "react";
import "./Songs.css";
import song1 from "./../../Assets/Audio/02 mariam des yibelish.mp3";
import song2 from "./../../Assets/Audio/04 yealemen bedel.mp3";
import song3 from "./../../Assets/Audio/14 gineu leegziabher.mp3";
import song4 from "./../../Assets/Audio/03mikurab 25-Feb-07.mp3";
import song5 from "./../../Assets/Audio/14 gineu leegziabher.mp3";
import song6 from "./../../Assets/Audio/bigcatch.mp3";
import song7 from "./../../Assets/Audio/gerald07.mp3";
import song8 from "./../../Assets/Audio/secondweeklentsermon.wma";
import song9 from "./../../Assets/Audio/14 gineu leegziabher.mp3";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const Songs = () => {
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
      <div className="song">
        <p className="song-title">
          Ethiopia Orthodox Church Songs and Liturgys.
        </p>
        <p className="song-text">
          The Ethiopian Church has made her music appropriate to the spirit of
          her services adapting it to the nature of the religious at which it is
          used, to the season of the ecclesiastical year and to the solemnity of
          the feast, making it grand and exultant on festivals of joy, and
          mournful in seasons of penance and in services for the dead.
          Adoration, thanksgiving, supplication, sorrow, joys and triumph are
          found in the zema (tone) of church music.
        </p>
        <div className="song-grid">
          <div className="song__audio">
            Songs of the week
            <audio className="audios" src={song1} controls></audio>
            <audio className="audios" src={song2} controls></audio>
            <audio className="audios" src={song3} controls></audio>
          </div>
          <div className="song__audio">
            Listen to sermons in English
            <audio className="audios" src={song4} controls></audio>
            <audio className="audios" src={song5} controls></audio>
            <audio className="audios" src={song6} controls></audio>
          </div>
          <div className="song__audio">
            Listen to Ethiopian liturgy in Ethiopia
            <audio className="audios" src={song7} controls></audio>
            <audio className="audios" src={song8} controls></audio>
            <audio className="audios" src={song9} controls></audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Songs;
