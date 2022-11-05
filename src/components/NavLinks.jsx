import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
  display:"flex";
  align-items:"center";
  justify-content:"center";
  margin:"3px";
`;

const linkStyle = {
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
};

export default function Nav_links(props) {
  return (
    <div className="nav_links_comp">
      <NavUnlisted>
        <Link to={props.nav_href} style={linkStyle} >{props.children}</Link>
        <div className="nav_links_underline"></div>
      </NavUnlisted>
    </div>
  )
}
