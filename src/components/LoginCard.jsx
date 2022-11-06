import React from 'react'
import Bear from './Bear'
import login_user from "../images/icons8-customer.png"
import login_pass from "../images/icons8-lock.png"
import NavLinks from './NavLinks'
import login_vid from "../videos/login_vid1.mp4"
export default function LoginCard() {
    return (
        <div className="logincard_comp">
            <div className="login_side_image" >
                <video height="500px" autoPlay loop muted alt="All the devices">
                <source src={login_vid} type="video/mp4" />
            </video>
            </div>
            <form action='/' className="logincard_form">
                <h2 className="login_heading">Welcome to <span className="login_heading_th">Treasure Hunt</span></h2>
                <div className="logincard_label1 logincard_label_div">
                    <img className="login_image" src={login_user} alt="loginpic" />
                    <label className="logincard_label" htmlFor="UserName">UserName</label>
                    <input className="logincard_input" placeholder="User Name" type="text" name="UserName" />
                </div>
                <div className="login_card_label2 logincard_label_div">
                    <div className="nox_login" >
                        <Bear pupils="display_eyes" pupil_animate="eyes_peep" arm_animate="close_eyes" />
                    </div>
                    <img className="login_pass" src={login_pass} alt="loginpic" />
                    <label className="logincard_label" htmlFor="Password">Password</label>
                    <input className="logincard_input" placeholder="Password" type="password" name="Password" />
                    <div className="login_nox">
                    </div>
                </div>
                <div className="logincard_btn_div">
                    <button className="logincard_btn"><NavLinks className="login_link" nav_href='/challenges'>Login</NavLinks></button>
                </div>
            </form>
        </div>
    )
}
