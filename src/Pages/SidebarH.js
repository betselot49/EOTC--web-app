import React from 'react'
import "./../Components/Sidebar.css"
import barana from "./../Assets/Images/barana.png";

const SidebarH = () => {
  return (
    <div>
      
      <div className="bookstore__container">
          <div className="bookstore">
            <div className="bookstore__header">
              <p className="bookstore-text">Book Store</p>
            </div>
          </div>

          <div className="brana__container">
            <div className="brana-left">
              <img className="bookstore__thumbnail" src={barana} alt="barana" />
            </div>
            <div className="barna-right">
              <p>
                The Ethiopian Orthodox Tewahedo Church has its own unique
                collection of religious texts and liturgical books. Some of the
                important books include: The Bible: The Ethiopian Orthodox
                Church uses its own version of the Bible, known as the Ethiopian
                Orthodox Tewahedo Church Bible, which includes books that are
                not found in other versions of the Bible. The Book of Enoch:
                This book is considered an important text in the Ethiopian
                Orthodox Church and is believed to have been written by Enoch,
                the great-grandfather of Noah. The Kebra Nagast: This book is a
                compendium of Ethiopian history, legends, and religious
                teachings. It is considered a valuable source of information
                about the Ethiopian Orthodox Church and its beliefs. The Zema:
                This is the liturgical book of the Ethiopian Orthodox Church,
                which includes hymns, prayers, and rituals used in worship
                services. The Fetha Nagast: This book is a collection of laws
                and regulations that govern the Ethiopian Orthodox Church and
                its members. These books are written in Ge'ez, an ancient
                Ethiopian language that is still used in the liturgical
                practices of the Ethiopian Orthodox Church.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SidebarH
