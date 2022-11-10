import React,{useState} from 'react'
import TimeLeft from './TimeLeft';
import Profile from './Profile';
import Progress from './Progress';
import NavLinks from './NavLinks';
import { Link,useNavigate } from 'react-router-dom';
import logout1 from "../images/logout.png"
import {useAuth} from "../contexts/AuthContext"
// import nexus_logo from "../images/nexus_logo.png"

export default function Header(props) {
    const [error,setError]=useState("")
    const {currentUser,logout}=useAuth()
    const navigate=useNavigate();
    async function handleLogout(){
            setError("")
            try{
                await logout()
                navigate("/")
            }catch{
                setError("Failed to logout")
            }
    }
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
                    <Link onClick={handleLogout}><img className="header_logout" src={logout1} alt="logout" /></Link>
                </div>
            </div>
            <Progress />
        </>
    );
}