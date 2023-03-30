import React from "react";
import "./books.css";
import { Link } from "react-router-dom";
import CanonicalBooks from "./Canonical books/canonical-books";
import ChurchMusicHistory from "./church-music/churchMusic";
import Holidays from "./Holidays";
import ethioBook from "./../Assets/Images/ethio bible.png";
import ethioBook1 from "./../Assets/Images/booooks.jpg";

let books = [
  {
    title: "THE ESTABLISHMENT OF THE ETHIOPIAN CHURCH",
    description: [
      "Traditional Sources",
      "Archaeological Sources",
      "Monotheism",
    ],
  },
  {
    title: "A PERIOD OF CONFLICT C. 700 – 1200 AD",
    description: [
      "The rise of Islam and its impact on Ethiopia",
      ,
      "The beginnings of the Zagwe Dynasty",
    ],
  },

  {
    title: "THE Hiarchy",
    description: [
      "Episcopate",
      "The hierarchy and laity",
      "Hierarchy and Sacraments",
      "The place of Hierarchy in the unity and order within the church",
    ],
  },
  {
    title: "WORSHIP IN THE ETHIOPIAN ORTHODOX CHURCH",
    description: [
      "The place of worship",
      "The time of worship",
      "And many more ...",
    ],
  },
  {
    title: "THE ETHIOPIAN ORTHODOX CHURCH SCHOOL SYSTEM",
    description: [
      "The nebab bet",
      "Fidel instruction",
      "Reading lesson from religious books",
      "and many more ...",
    ],
  },
];

let books1 = [
  {
    title: "PART-I",
    description: ["Introdution"],
  },
  {
    title: "PART-II",
    description: ["The Seven Sacraments"],
  },

  {
    title: "PART-III",
    description: ["ITHE ISSUE BETWEEN MONOPHYSITISM AND DYOPHYSITISM"],
  },
];

export const AboutUs = () => {
  return (
    <div className="home">
      <div className="books">
        <div className="books__item">Ethiopian Orthodox Church Books</div>
        <div className="books__text">
          The Ethiopian Orthodox Church has 46 books of the Old Testament and 35
          books of the New Testament that will bring the total of canonized
          books of the Bible to 81. These are the following A. The Holy Books of
          the Old Testament 1. Genesis 2. Exodus 3. Leviticus 4. Numbers 5.
          Deuteronomy 6. Joshua 7. Judges 8. Ruth 9. I and II Samuel 10.
        </div>
      </div>

      <div className="grid">
        <div className="grid-items">
          <div className="thumbnail">
            <img src={ethioBook} alt="Ethiopian holy bible" />
          </div>
          <p className="grid-text">
            he Ethiopian Orthodox Church has 46 books of the Old Testament and
            35 books of the New Testament that will bring the total of canonized
            books of the Bible to 81.
          </p>
        </div>
        <div className="grid-items">
          <div className="thumbnail">
            <img src={ethioBook1} alt="Ethiopian holy bible" />
          </div>
          <div className="grid-text">
            The Holy Books of the Old Testament
            <p>1. Genesis</p>
            <p>2. Exodus</p>
            <p>3. Leviticus</p>
            <p>and many more...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OurAim = () => {
  return (
    <div className="home">
      <div className="container">
        {books.map((item, index) => {
          return (
            <div className="book">
              <Link className="book__text" to={`/historybooks/H${index}`}>
                <h2 className="title">{item.title}</h2>
                <ul>
                  {item.description.map((element) => {
                    return <li className="description">{element}</li>;
                  })}
                </ul>
                <button className="readnow__button">Read now</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const OurVision = () => {
  return (
    <div className="home">
      <div>
        <h1>THE FAITH OF THE CHURCH</h1>
        <div className="container">
          {books1.map((item, index) => {
            return (
              <div className="book">
                <Link className="book__text" to={`/dogmabooks/D${index}`}>
                  <h2 className="title">{item.title}</h2>
                  <ul>
                    {item.description.map((element) => {
                      return <li className="description">{element}</li>;
                    })}
                  </ul>
                  <button className="readnow__button">Read now</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const CanonicalBooks1 = () => {
  return <CanonicalBooks />;
};

export const ChurchMusicHistory1 = () => {
  return <ChurchMusicHistory />;
};

export const Holidays1 = () => {
  return <Holidays />;
};
