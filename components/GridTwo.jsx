import React from "react"
import Image from "next/image"

const GridTwo = () => {
  return (
    <div className='gridTwo_wrapper'>
      <div className='card_One'>
        <Image
          src='/images/img2.jpg'
          alt='img2'
          width={1100}
          height={900}
          objectFit='cover'
        />
        <div className='content'>
          <h1>Your Business On The Web</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptatibus minima error sint quasi consectetur mollitia dolor
            tempore, labore reiciendis.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default GridTwo
