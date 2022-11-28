import React from 'react'
import logo from '../../../assets/graphics/MALogo.svg'
import {Link} from 'react-scroll'

import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark start-50 translate-middle-x position-fixed '
    style={{background:"rgba(10, 16, 30)"}}>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-mdb-toggle='collapse'
          data-mdb-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <i className='fas fa-bars'></i>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <Link className='navbar-brand mt-2 mt-lg-0' to='hero'>
            <img src={logo} height='15' alt='MDB Logo' loading='lazy' />
          </Link>
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0 w-50 justify-content-around'>
            <li className='nav-item'>
              <Link className='nav-link' spy={true} to='hero'>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' spy={true} to='about'>
                ABOUT
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/'>
                RESUME
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link className='nav-link' spy={true} to='portfolio'>
                PORTFOLIO
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' spy={true} to='contact'>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
