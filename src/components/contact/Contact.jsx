import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div className='contact container section' id='contact'>
      <h2 className='sectionTitle'>Get In Touch</h2>

      <div className='contactContainer grid'>
        <div className='contactInfo'>
          <h3 className='contactTitle'>Lets talk about everything!</h3>
          <p className='contactDetails'>Dont like forms? Send me an email. 👋</p>
        </div>

        <form action='' className='contactForm'>
          <div className='contactFormGroup'>
            <div className='contactFormDiv'>
              <input type='text' className='contactFormInput' placeholder='Insert your name' />
            </div>

            <div className='contactFormDiv'>
              <input type='text' className='contactFormInput' placeholder='Insert your email' />
            </div>
          </div>

          <div className='contactFormDiv'>
            <input type='text' className='contactFormInput' placeholder='Insert your subject' />
          </div>

          <div className='contactFormDiv'>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              className='contactFormInput'
              placeholder='Write your message'
            ></textarea>
          </div>

          <button className='btn contactBtn'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
