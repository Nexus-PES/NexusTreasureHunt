import React from 'react'
import pes_logo from '../images/logo-dark.png'
import FooterDesc from "./FooterDesc"
import club_logo from "../images/nexus_logo.png"

export default function Footer() {
  return (
    <div className="footer_comp">
        <img className="footer_pes_logo" src={pes_logo} alt="college logo"></img>
        <p><FooterDesc /></p>
        <img className="footer_pes_logo" src={club_logo} alt="college logo"></img>
    </div>
  )
}
