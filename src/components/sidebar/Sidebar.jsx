import React from 'react'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import Logo from '../../assets/images/logo.svg'
import { GraducationIcon } from '../Icons'
import './Sidebar.scss'

function Sidebar() {
  return (
    <aside className='aside'>
      <a href='#home' className='navbarLogo'>
        <img src={Logo} alt='Logo' />
      </a>

      <nav className='nav'>
        <div className='navMenu'>
          <ul className='navList'>
            <li className='navItem'>
              <a href='#home' className='navLink'></a>
            </li>
            <li className='navItem'>
              <a href='' className='navLink'></a>
            </li>
            <li className='navItem'>
              <a href='' className='navLink'></a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
