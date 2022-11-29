import React from 'react'
import { Link } from 'react-scroll'
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero mx-auto'>
      <div className='col-12 h-100 border border-0 d-flex flex-column justify-content-center align-items-start text-start ps-4 ps-lg-0'>
        <h3 className=''>Hello, I'm</h3>
        <h1 className=''>Mohamed Ali</h1>
        <h2 className=''>Frontend Developer | ReactJS - Typescript</h2>
        <Link to='about'>
          <button className='btn'>Hire Me</button>
        </Link>
      </div>
    </div>
  )
}
