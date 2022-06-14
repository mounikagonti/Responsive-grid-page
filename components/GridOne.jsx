import { ChartPie, Cog, GlobeAlt, UserGroup } from "heroicons-react"
import React from "react"

const GridOne = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='card_One'>Home</div>
        <div className='card_Two'>About</div>
        <div className='card_Three'>Services</div>
        <div className='card_Four'>Contact</div>
      </div>
      <div className='banner'>
        <div className='banner_left'>
          <div className='card_Five'>
            <div className='content'>
              <h1>Your Web Presence</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                corporis.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className='banner_right'>
          <div className='card_Six'>
            <h5>Membership</h5>
            <h1>$199/mo</h1>
            <button>Buy Now</button>
          </div>
          <div className='card_Seven'>
            <h5>Pre Membership</h5>
            <h1>$299/mo</h1>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='services'>
        <div className='cards card_Eight'>
          <ChartPie className='icon'/>
          <h3>Analytics</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            soluta.
          </p>
        </div>
        <div className='cards card_Nine'>
          <GlobeAlt className='icon' />
          <h3>Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            soluta.
          </p>
        </div>
        <div className='cards card_Ten'>
          <Cog className='icon' />
          <h3>Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            soluta.
          </p>
        </div>
        <div className='cards card_Eleven'>
          <UserGroup className='icon' />
          <h3>Support</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            soluta.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GridOne
