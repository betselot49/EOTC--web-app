import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { AboutUs } from "../Pages/Books";
import "./Sidebar.css";
import barana from "./../Assets/Images/barana.png";
import { Booooks } from "./Booooks";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ renderH }) => {
  const [sidebar, setSidebar] = useState(true);
  const [display ,setDisplay] = useState(true)
  const Navigate = useNavigate();


  const disapble = () => {
    setDisplay(false)
    console.log(display)
  }




  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1
            style={{
              textAlign: "center",
              marginLeft: "250px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              renderH(true);
              Navigate("/");
            }}
          >
            EOTC
          </h1>
        </Nav>
        
        <SidebarNav sidebar={sidebar} onClick={()=> (setDisplay(false))}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index}/>;
            })}

            
          </SidebarWrap>
        </SidebarNav>
       
          {display && <Booooks />}
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
