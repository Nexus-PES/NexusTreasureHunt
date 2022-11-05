import React from 'react'
import Bear from './Bear'

export default function NotFound404() {
    return (
        <div className="notfound_comp">
            <div className="nox_notfound">
                <Bear spin_eye_animate="spin_animate" spin_eyes="spin_eyes" />
            </div>
            <div className="notfound_desc">
                <div className="notfound_heading_404">404</div>
                <h1 className="notfound_heading">Oouch!!</h1>
                <div className="notfound_cont">
                    <p>We looked everywhere for this page.</p>
                    <p>Are you sure the website URL is correct</p>
                    <p>Get in touch with the site owner</p>
                </div>
            </div>
        </div>
    )
}
