import React from 'react'
import {Link} from 'react-router-dom'

export default function Card(props) {
  return (
    <div className="card_comp">
      <div>
        <div className="card_ques_num">Question {props.qnumber}</div>
        <div className="card_ques_underline"></div>
        <div className="card_ques_desc">{props.title}</div>
        <div className="card_decoration"></div>
        <div className="card_decoration2"></div>
      </div>
      <Link to={props.que_no} className="card_btn">Click</Link>
    </div>
  )
}
