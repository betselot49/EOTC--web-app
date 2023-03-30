import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "Books",
    path: "/sidebar/books",
    icon: <AiIcons.AiFillBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Church History",
        path: "/sidebar/books/church-history",
        icon: <FaIcons.FaBible />,
      },
      {
        title: "Dogma and Doctrine",
        path: "/sidebar/books/dogma-doctrine",
        icon: <FaIcons.FaBaby />,
      },

      {
        title: "Church music history",
        path: "/sidebar/books/church-music-history",
        icon: <FaIcons.FaBaby />,
      },

      {
        title: "Canonical books",
        path: "/sidebar/books/Conical-books",
        icon: <FaIcons.FaBaby />,
      },

      {
        title: "Holidays",
        path: "/sidebar/books/holidays",
        icon: <FaIcons.FaBaby />,
      },
    ],
  },
  
  {
    title: "For kids",
    path: "/sidebar/contact",
    icon: <FaIcons.FaBaby />,
  },


];