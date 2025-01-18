import React from 'react'
import './ScrollDown.scss'

function ScrollDown() {
  return (
    <div className='scrollDown'>
      <a href='#about' className='mouseWrapper'>
        <span className='homeScrollName'>Scroll Down</span>
        <span className='mouseScroll'>
          <span className='wheel'></span>
        </span>
      </a>
    </div>
  )
}

export default ScrollDown
