import React from "react";
import "./Contact.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const Contact1 = () => {
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


      <div>
        <div className="contact">
          <p className="contact__header">
            Please Contact us for any enquiries with the following temporary
            e-mail.
          </p>
          <div className="contact__item1">
            <p className="item2">
              <AiIcons.AiOutlineMail className="email" />{" "}
              info@ethiopianorthodox.org
            </p>
            <p className="item2">
              <AiIcons.AiOutlineMail className="email" />
              webmaster@ethiopianorthodox.org
            </p>
          </div>
          <p className="item3">
            In case the server is down and you need to contact us please use:
          </p>
          <p className="item4">
            <AiIcons.AiOutlineMail className="email" />
            eotcwebm@yahoo.co.uk
          </p>
          <p className="item5">To contact the Patriarchal office:</p>
          <p className="item6">
            <AiIcons.AiOutlineMail className="email" />
            holy-synod@ethiopianorthodox.org
          </p>
          <p className="item7">Thank you!</p>
        </div>
      </div>
    </>
  );
};

export default Contact1;
