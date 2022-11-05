import React from 'react'
import TimeLeft from './TimeLeft';
import Profile from './Profile';
import Progress from './Progress';
import NavLinks from './NavLinks';


export default function Header(props) {
    return (
        <>
            <div className="header_comp">
                <h2 className="header_title">NEXUS.</h2>
                {/* <div className="navbar_comp"> */}
                <ul className="navbar_ribbon">
                    <li><NavLinks nav_href='/NexusTreasureHunt/admin'>Admin</NavLinks></li>
                    <li><NavLinks nav_href='/NexusTreasureHunt/challenges'>Challenges</NavLinks></li>
                    <li><NavLinks nav_href='/NexusTreasureHunt/scoreboard'>Scoreboard</NavLinks></li>
                    <li><NavLinks nav_href='/NexusTreasureHunt/about'>About</NavLinks></li>
                </ul>
                {/* </div> */}
                <div className="header_left">
                    <TimeLeft />
                    <Profile name={props.name} />
                </div>
            </div>
            <Progress />
        </>
    );
}