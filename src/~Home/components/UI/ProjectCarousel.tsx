import React from 'react'
import img1 from '../../../assets/graphics/FireShot Capture 004.png'
import img2 from '../../../assets/graphics/FireShot Capture 005.png'
import img3 from '../../../assets/graphics/FireShot Capture 006.png'
import img4 from '../../../assets/graphics/FireShot Capture 007.png'
import img5 from '../../../assets/graphics/FireShot Capture 008.png'
//import link icon
import { Carousel } from 'react-bootstrap'

export default function ProjectCarousel() {
  return (
    <div className='container col-11 d-none d-lg-block' style={{ minHeight: '50vh', margin: '20px auto' }}>
      <Carousel variant='dark' interval={null}>
        <Carousel.Item>
          <img className='d-block w-100' src={img1} alt='First slide' />
          <Carousel.Caption>
            <h5>Login</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img2} alt='Second slide' />

          <Carousel.Caption>
            <h5>Home</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img3} alt='Second slide' />

          <Carousel.Caption>
            <h5>Budget tracker</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img4} alt='Second slide' />

          <Carousel.Caption>
            <h5>Todo list</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img5} alt='Second slide' />

          <Carousel.Caption>
            <h5>Invitation maker</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
