import React from 'react'
import './About.scss'
import Image from '../../assets/images/avatar-2.svg'
import AboutBox from './AboutBox'

function About() {
  return (
    <section className='about container section' id='about'>
      <div>
        <h2 className='sectionTitle'>About Me</h2>

        <div className='aboutContainer grid'>
          <img src={Image} alt='' className='aboutImg' />

          <div className='aboutData grid'>
            <div className='aboutInfo'>
              <p className='aboutDesc'>
                I am a student at Hanoi University of Natural Resources and Environment. Currently I am studying and
                working on Web Front End development. My long term goal is to become a Full Stack Web developer
              </p>
              <a href='#!' className='btn'>
                Download CV
              </a>
            </div>

            <div className='aboutSkills grid'>
              {/* development */}
              <div className='skillsData'>
                <div className='skillsTitle'>
                  <h3 className='skillsName'>Development</h3>
                  <span className='skillsNumber'>90%</span>
                </div>

                <div className='skillsBar'>
                  <div className='skillsPercentage development'></div>
                </div>
              </div>

              {/* uiDesign */}
              <div className='skillsData'>
                <div className='skillsTitle'>
                  <h3 className='skillsName'>UI/UX design</h3>
                  <span className='skillsNumber'>80%</span>
                </div>

                <div className='skillsBar'>
                  <div className='skillsPercentage uiDesign'></div>
                </div>
              </div>

              {/* photography */}
              <div className='skillsData'>
                <div className='skillsTitle'>
                  <h3 className='skillsName'>Photography</h3>
                  <span className='skillsNumber'>60%</span>
                </div>

                <div className='skillsBar'>
                  <div className='skillsPercentage photography'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AboutBox />
      </div>
    </section>
  )
}

export default About
