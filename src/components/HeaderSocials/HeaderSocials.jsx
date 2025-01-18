import React from 'react'

import './HeaderSocials.scss'
import { BehanceIcon, DribbbleIocn, Instagram, PrinterIocn, TwitterIcon } from '../Icons'

function HeaderSocials() {
  return (
    <div className='homeSocials'>
      <a href='https://www.instagram.com/' className='homeSocialsLink'>
        <Instagram className='iconHeaderSocials' />
      </a>

      <a
        href='https://www.twitter.com/
'
        className='homeSocialsLink'
      >
        <TwitterIcon className='iconHeaderSocials' />
      </a>

      <a href='https://www.behance.com/' className='homeSocialsLink'>
        <BehanceIcon className='iconHeaderSocials' />
      </a>

      <a href='https://www.dribble.com/' className='homeSocialsLink'>
        <DribbbleIocn className='iconHeaderSocials' />
      </a>

      <a href='https://www.pinterest.com/' className='homeSocialsLink'>
        <PrinterIocn className='iconHeaderSocials' />
      </a>
    </div>
  )
}
export default HeaderSocials
