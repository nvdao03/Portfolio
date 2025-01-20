import React from 'react'
import './About.scss'
import { BadgeIcon, CupIcon, FireIcon, PeopleIcon } from '../Icons'

function AboutBox() {
  return (
    <div className='aboutBoxes grid'>
      <div className='aboutBox'>
        <FireIcon className='icon aboutIcon' />

        <div>
          <h3 className='aboutTitle'>198</h3>
          <span className='aboutSubTitle'>Project completed</span>
        </div>
      </div>

      <div className='aboutBox'>
        <CupIcon className='icon aboutIcon' />

        <div>
          <h3 className='aboutTitle'>5670</h3>
          <span className='aboutSubTitle'>Cup of coffee</span>
        </div>
      </div>

      <div className='aboutBox'>
        <PeopleIcon className='icon aboutIcon' />

        <div>
          <h3 className='aboutTitle'>427</h3>
          <span className='aboutSubTitle'>Satisfied clients</span>
        </div>
      </div>

      <div className='aboutBox'>
        <BadgeIcon className='icon aboutIcon' />

        <div>
          <h3 className='aboutTitle'>35</h3>
          <span className='aboutSubTitle'>Nominees winner</span>
        </div>
      </div>
    </div>
  )
}

export default AboutBox
