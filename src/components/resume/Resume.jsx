import React from 'react'

import Card from './Card'
import './Resume.scss'
import { BrieftCaseIcon, GraducationIcon } from '../Icons'

const data = [
  {
    id: 1,
    category: 'education',
    icon: <GraducationIcon className='icon timeLineIcon' />,
    year: '2021 - present',
    title: 'Academic Degree',
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.'
  },
  {
    id: 2,
    category: 'education',
    icon: <GraducationIcon className='icon timeLineIcon' />,
    year: '2021 - present',
    title: "Bachelor's Degree",
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.'
  },
  {
    id: 3,
    category: 'education',
    icon: <GraducationIcon className='icon timeLineIcon' />,
    year: '2021 - present',
    title: 'Honours Degree',
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.'
  },
  {
    id: 4,
    category: 'experience',
    icon: <BrieftCaseIcon className='icon timeLineIcon' />,
    year: '2021 - present',
    title: 'Web Designer',
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.'
  },
  {
    id: 5,
    category: 'experience',
    icon: <BrieftCaseIcon className='icon timeLineIcon' />,
    year: '2021 - present',
    title: 'Front-End Developer',
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.'
  },
  {
    id: 6,
    category: 'experience',
    icon: <BrieftCaseIcon className='icon timeLineIcon' />,
    year: '2009 - present',
    title: 'Back-End Developer',
    desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.'
  }
]

function Resume() {
  return (
    <section className='resume container section' id='resume'>
      <h2 className='sectionTitle'>Experience</h2>

      <div className='resumeContainer grid'>
        <div className='timeLine grid'>
          {data.map((item) => {
            if (item.category === 'education') {
              return <Card key={item.id} title={item.title} year={item.year} desc={item.desc} icon={item.icon} />
            }
          })}
        </div>

        <div className='timeLine grid'>
          {data.map((item) => {
            if (item.category === 'experience') {
              return <Card key={item.id} title={item.title} year={item.year} desc={item.desc} icon={item.icon} />
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume
