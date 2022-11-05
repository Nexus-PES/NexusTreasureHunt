import React from 'react'
import Bear from './Bear'
import login_user from "../images/icons8-customer.png"
import login_pass from "../images/icons8-lock.png"

export default function LoginCard() {
    return (
        <div className="logincard_comp">
            <div className="login_side_image" />
            <form action='/' className="logincard_form">
                <h2 className="login_heading">Welcome to Treasure Hunt</h2>
                <div className="logincard_label1 logincard_label_div">
                    <img className="login_image" src={login_user} alt="loginpic" />
                    <label className="logincard_label" for="UserName">UserName</label>
                    <input className="logincard_input" placeholder="User Name" type="text" name="UserName" />
                </div>
                <div className="login_card_label2 logincard_label_div">
                    <div className="nox_login" >
                        <Bear pupils="display_eyes" pupil_animate="eyes_peep" arm_animate="close_eyes" />
                    </div>
                    <img className="login_pass" src={login_pass} alt="loginpic" />
                    <label className="logincard_label" for="Password">Password</label>
                    <input className="logincard_input" placeholder="Password" type="password" name="Password" />
                    <div className="login_nox">
                    </div>
                </div>
                <div className="logincard_btn_div">
                    <button className="logincard_btn">Login</button>
                </div>
            </form>
        </div>
    )
}