import React from 'react'

import Image1 from '../../assets/images/service-1.svg'
import Image2 from '../../assets/images/service-2.svg'
import Image3 from '../../assets/images/service-3.svg'
import './Service.scss'

const data = [
  {
    id: 1,
    image: Image1,
    title: 'UI/UX design',
    description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula.'
  },
  {
    id: 2,
    image: Image2,
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula.'
  },
  {
    id: 3,
    image: Image3,
    title: 'Photography',
    description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula.'
  }
]

function Service() {
  return (
    <section className='services container section' id='services'>
      <h2 className='sectionTitle'>Services</h2>

      <div className='servicesContainer grid'>
        {data.map((item) => {
          return (
            <div className='servicesCard' key={item.id}>
              <img src={item.image} alt={item.title} className='servicesImg' />

              <h3 className='servicesTitle'>{item.title}</h3>
              <p className='serviesDesc'>{item.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Service
