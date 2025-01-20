import React from 'react'

import Image1 from '../../assets/images/blog-1.svg'
import Image2 from '../../assets/images/blog-2.svg'
import Image3 from '../../assets/images/blog-3.svg'
import './Blog.scss'

function Blog() {
  return (
    <div className='blog container section' id='blog'>
      <h2 className='sectionTitle'>Latest Posts</h2>

      <div className='blogContainer grid'>
        <div className='blogCard'>
          <div className='blogThumb'>
            <a href='#!'>
              <span className='blogCategory'>Reviews</span>
            </a>
            <a href='#!'>
              <img src={Image1} alt='' className='blogImg' />
            </a>
          </div>
          <div className='blogDetails'>
            <h3 className='blogTitle'>5 Best App Development Tool for Your Projects</h3>
            <div className='blogMeta'>
              <span>09 February, 2022</span>
              <span className='blogDots'>.</span>
              <span>Boldy</span>
            </div>
          </div>
        </div>

        <div className='blogCard'>
          <div className='blogThumb'>
            <a href='#!'>
              <span className='blogCategory'>Tutorial</span>
            </a>
            <a href='#!'>
              <img src={Image2} alt='' className='blogImg' />
            </a>
          </div>
          <div className='blogDetails'>
            <h3 className='blogTitle'>Common Misconceptions About Payment</h3>
            <div className='blogMeta'>
              <span>07 February, 2022</span>
              <span className='blogDots'>.</span>
              <span>Boldy</span>
            </div>
          </div>
        </div>

        <div className='blogCard'>
          <div className='blogThumb'>
            <a href='#!'>
              <span className='blogCategory'>Business</span>
            </a>
            <a href='#!'>
              <img src={Image3} alt='' className='blogImg' />
            </a>
          </div>
          <div className='blogDetails'>
            <h3 className='blogTitle'>3 Things to know about startup business</h3>
            <div className='blogMeta'>
              <span>05 February, 2022</span>
              <span className='blogDots'>.</span>
              <span>Boldy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
