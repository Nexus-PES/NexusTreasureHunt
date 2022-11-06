import React from 'react'
import TimeLeft from './TimeLeft';
import Profile from './Profile';
import Progress from './Progress';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import logout from "../images/logout.png"
// import nexus_logo from "../images/nexus_logo.png"

export default function Header(props) {
    return (
        <>
            <div className="header_comp">
            {/* <img className="header_nexus_logo" src={nexus_logo} /> */}
                <h2 className="header_title">NEXUS</h2>
                <ul className="navbar_ribbon">
                    <li><NavLinks nav_href='/challenges'>Challenges</NavLinks></li>
                    <li><NavLinks nav_href='/scoreboard'>Scoreboard</NavLinks></li>
                </ul>
                <div className="header_left">
                    <TimeLeft />
                    <Profile name={props.name} />
                    <Link to="/"><img className="header_logout" src={logout} alt="logout" /></Link>
                </div>
            </div>
            <Progress />
        </>
    );
}