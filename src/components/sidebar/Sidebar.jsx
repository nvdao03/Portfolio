import React from 'react'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.scss'
import Logo from '../../assets/images/logo.svg'

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
              <a href='#home' className='navLink'>
                <HomeOutlined />
              </a>
            </li>
            <li className='navItem'>
              <a href='#home' className='navLink'>
                <UserOutlined />
              </a>
            </li>
            <li className='navItem'>
              <a href='#home' className='navLink'>
                {/* <FontAwesomeIcon icon={faGraduationCap} /> */}t
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
