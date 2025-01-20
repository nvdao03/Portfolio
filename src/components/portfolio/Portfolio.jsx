import React, { useState } from 'react'

import Work1 from '../../assets/images/work-1.svg'
import Work2 from '../../assets/images/work-2.svg'
import Work3 from '../../assets/images/work-3.svg'
import Work4 from '../../assets/images/work-4.svg'
import Work5 from '../../assets/images/work-5.svg'
import Work6 from '../../assets/images/work-6.svg'
import './Portfolio.scss'
import { LinkIcon } from '../Icons'

const data = [
  {
    id: 1,
    image: Work1,
    title: 'Project Management Illustration',
    category: 'Design'
  },
  {
    id: 2,
    image: Work2,
    title: 'Guest App Walkthrough Screens',
    category: 'Art'
  },
  {
    id: 3,
    image: Work3,
    title: 'Delivery App Wireframe',
    category: 'Branding'
  },
  {
    id: 4,
    image: Work4,
    title: 'Onboarding Motivation',
    category: 'Design'
  },
  {
    id: 5,
    image: Work5,
    title: 'iMac Mockup Design',
    category: 'Creative'
  },
  {
    id: 6,
    image: Work6,
    title: 'Game Store App Concept',
    category: 'Art'
  }
]

const dataTitle = [
  {
    id: 0,
    title: 'Everything'
  },
  {
    id: 1,
    title: 'Creative'
  },
  {
    id: 2,
    title: 'Art'
  },
  {
    id: 3,
    title: 'Design'
  },
  {
    id: 4,
    title: 'Branding'
  }
]

function Portfolio() {
  const [categorys, setCategorys] = useState(data) // Danh sách hiển thị
  const [filterCategory, setFilterCategory] = useState(data) // Tab hiển thị hiện tại
  const [currentTab, setCurrentTab] = useState('Everything') // Lưu trữ text của tab để sử lý hover

  const handleChangeItems = (e) => {
    const selectCategory = e.target.textContent
    setCurrentTab(selectCategory) // Update text của tab hiện tại

    if (selectCategory === 'Everything') {
      setFilterCategory(data)
    } else {
      // Filter dựa trên mảng gốc và lưu kết quả vào mảng mới để render. mảng gốc không bị ảnh hưởng gi
      const filterCate = categorys.filter((item) => {
        return item.category === selectCategory
      })
      setFilterCategory(filterCate)
    }
  }

  return (
    <section className='work container section' id='work'>
      <h2 className='sectionTitle'>Recent Work</h2>

      <div className='workFilter'>
        {dataTitle.map((item) => (
          <button
            className={item.title === currentTab ? `workItem active` : `workItem`}
            onClick={handleChangeItems}
            key={item.id}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className='workContainer grid'>
        {filterCategory.map((item) => {
          return (
            <div className='workCard' key={item.id}>
              <div className='workThumbnail'>
                <img src={item.image} alt={item.title} className='workImg' />
                <div className='workMask'></div>
              </div>

              <span className='workCategory'>{item.category}</span>
              <h3 className='workTitle'>{item.title}</h3>
              <a href='!#' className='workButton'>
                <LinkIcon className='icon' />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
