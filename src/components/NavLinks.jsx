import React from 'react'
import {Link} from "react-router-dom"

export default function Nav_links(props) {
  return (
    <div className="nav_links_comp">
        <Link to={props.nav_href}>{props.children}</Link>
        <div className="nav_links_underline"></div>
    </div>
  )
}
