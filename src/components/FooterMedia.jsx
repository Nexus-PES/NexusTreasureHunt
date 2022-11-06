import React from 'react'
import linkedin from '../images/linkedin.png'
import discord from '../images/discord.png'
import insta from '../images/instagram.png'
import mail from "../images/mail.png"

export default function Footer_desc() {
    return (
        <div className="footer_desc_comp">
            {/* <div >
                <ul className="footer_links footer_sites">
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div> */}
            <div>
                <ul className="footer_links">
                    <li><a href="mailto:nexus_cse@pes.edu?subject = Feedback&body = Message"><img src={mail} className="footer_social_icons" alt="socail media" /></a></li>
                    <li><a href="/"><img src={discord} className="footer_social_icons" alt="socail media" /></a></li>
                    <li><a href="https://www.instagram.com/nexus.pesu/"><img src={insta} className="footer_social_icons" alt="socail media" /></a></li>
                    <li><a href="https://www.linkedin.com/company/nexus-pes/"><img src={linkedin} className="footer_social_icons" alt="socail media" /></a></li>
                </ul>
            </div>
        </div>
    )
}
