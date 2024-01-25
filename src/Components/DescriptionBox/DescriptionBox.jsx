import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
          <p>
            an ecommerce website is an online platform that facilitates customers to customize their products
            
          </p>
        </div>
    </div>
  )
}

export default DescriptionBox