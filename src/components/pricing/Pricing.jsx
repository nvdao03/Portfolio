import React from 'react'

import Image1 from '../../assets/images/price-1.svg'
import Image2 from '../../assets/images/price-2.svg'
import Image3 from '../../assets/images/price-3.svg'
import './Pricing.scss'

function Pricing() {
  return (
    <div className='pricing container section'>
      <h2 className='sectionTitle'>Pricing Plans</h2>

      <div className='pricingContainer grid'>
        <div className='pricingItem'>
          <img src={Image1} alt='' className='pricingImg' />
          <h3 className='pricingPlan'>Basic</h3>
          <p className='pricingTitle'>A Simple option but powerful to manage your business</p>
          <p className='pricingSupport'>Email support</p>
          <h3 className='price'>
            <em>$</em> 9 <span>Month</span>
          </h3>
          <a href='#!' className='btn'>
            Get Started
          </a>
        </div>

        <div className='pricingItem best'>
          <span className='badge'>Recommened</span>
          <img src={Image2} alt='' className='pricingImg' />
          <h3 className='pricingPlan'>Premium</h3>
          <p className='pricingTitle'>Unlimited product including app integration and more features</p>
          <p className='pricingSupport'>Mon-Fri support</p>
          <h3 className='price'>
            <em>$</em> 15 <span>Month</span>
          </h3>
          <a href='#!' className='btn'>
            Get Started
          </a>
        </div>

        <div className='pricingItem'>
          <img src={Image3} alt='' className='pricingImg' />
          <h3 className='pricingPlan'>Ultimate</h3>
          <p className='pricingTitle'>A wise option for large companies and individuals</p>
          <p className='pricingSupport'>24/7 support</p>
          <h3 className='price'>
            <em>$</em> 19 <span>Month</span>
          </h3>
          <a href='#!' className='btn'>
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

export default Pricing
