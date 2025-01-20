import React from 'react'

import Image1 from '../../assets/images/avatar-1.svg'
import Image3 from '../../assets/images/avatar-3.svg'
import './testimonials.scss'

const data = [
  {
    id: 1,
    image: Image1,
    title: 'John Doe',
    subtitle: 'Product designer at Dribble',
    comment:
      'I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍'
  }
]

function Testimonials() {
  return (
    <div className='testimonials container section'>
      <h2 className='sectionTitle'>Client & Reviews</h2>

      <div className='testimonialsContainer grid'>
        {data.map((item) => {
          return (
            <div className='testimonialItem' key={item.id}>
              <div className='thumb'>
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className='testimonialTitle'>{item.title}</h3>
              <span className='testimonialSubtitle'>{item.subtitle}</span>
              <p className='testimonialComment'>{item.comment}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
