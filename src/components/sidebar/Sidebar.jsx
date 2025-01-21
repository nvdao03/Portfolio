import React from 'react'

import Logo from '../../assets/images/logo.svg'
import {
  BrieftCaseIcon,
  BubbleIcon,
  GraducationIcon,
  HomeIcon,
  LayerGroupIcon,
  MenuIcon,
  NoteIcon,
  UserFollowingIcon
} from '../Icons'
import './Sidebar.scss'

function Sidebar() {
  const handleMenuToggle = (e) => {
    const menu = document.querySelector('.navToggle')
    const aside = document.querySelector('.aside')

    document.addEventListener('click', () => {
      if (menu.contains(e.target)) {
        aside.classList.toggle('activeAside')
        menu.classList.toggle('activeNavToggle')
      } else {
        if (!aside.contains(e.target)) {
          aside.classList.remove('activeAside')
          menu.classList.remove('activeNavToggle')
        }
      }
    })
  }

  return (
    <>
      <div className='aside'>
        <a href='#home' className='navbarLogo'>
          <img src={Logo} alt='Logo' />
        </a>

        <nav className='nav'>
          <div className='navMenu'>
            <ul className='navList'>
              <li className='navItem'>
                <a href='/' className='navLink'>
                  <HomeIcon className='iconSidebar' />
                </a>
              </li>

              <li className='navItem'>
                <a href='#about' className='navLink'>
                  <UserFollowingIcon className='iconSidebar' />
                </a>
              </li>

              <li className='navItem'>
                <a href='#services' className='navLink'>
                  <BrieftCaseIcon className='iconSidebar' />
                </a>
              </li>

              <li className='navItem'>
                <a href='#resume' className='navLink'>
                  <GraducationIcon className='iconSidebar' />
                </a>
              </li>

              <li className='navItem'>
                <a href='#portfolio' className='navLink'>
                  <LayerGroupIcon className='iconSidebar' />
                </a>
              </li>

              <li className='navItem'>
                <a href='#blog' className='navLink'>
                  <NoteIcon className='iconSidebar' />
                </a>
              </li>

              <li className='navItem'>
                <a href='#contact' className='navLink'>
                  <BubbleIcon className='iconSidebar' />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className='navFooter'>
          <span className='navCopyright'>&copy; 2024 - 2025.</span>
        </div>
      </div>

      <button className='navToggle' onClick={handleMenuToggle}>
        <MenuIcon className='icon navToggleIcon' />
      </button>
    </>
  )
}

export default Sidebar
