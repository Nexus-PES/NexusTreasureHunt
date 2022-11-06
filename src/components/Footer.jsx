import React from 'react'
import pes_logo from '../images/logo-dark.png'
import FooterMedia from "./FooterMedia"
// import club_logo from "../images/nexus_logo.png"

export default function Footer() {
  return (
    <div className="footer_comp">
    <div className="footer_logo_link">
        <img className="footer_pes_logo" src={pes_logo} alt="college logo"></img>
        <FooterMedia />
    </div>
    <div className="footer_rights">
                <div>Nexus {new Date().getFullYear()} • All rights reserved</div>
                <div>Made with ❣️ by Nexus Team</div>
            </div>
        {/* <img className="footer_pes_logo" src={club_logo} alt="college logo"></img> */}
    </div>
  )
}
