import React from 'react'

import HeaderSocials from '../HeaderSocials'
import './Home.scss'
import Me from '../../assets/images/avatar-1.svg'
import ScrollDown from '../ScrollDown'
import Shapes from '../Shapes/Shapes'

function Home() {
  return (
    <section className='home container'>
      <div className='intro'>
        <img src={Me} alt='Văn Đạo' className='homeImg' />
        <h1 className='homeName'>Văn Đạo</h1>
        <span className='homeEducation'>Im a Front-End developer</span>

        <HeaderSocials />

        <a href='#contact' className='btn'>
          Hire Me
        </a>

        <ScrollDown />

        <Shapes />
      </div>
    </section>
  )
}

export default Home
