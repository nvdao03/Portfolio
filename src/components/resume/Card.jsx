import React from 'react'
import './Resume.scss'

export default function Card(props) {
  return (
    <div className='timeLineItem'>
      {props.icon}
      <span className='timeLineDate'>{props.year}</span>
      <h3 className='timeLineTitle'>{props.title}</h3>
      <p className='timeLineText'>{props.desc}</p>
    </div>
  )
}
