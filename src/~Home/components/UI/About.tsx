import React from 'react'
import './About.css'
type infoType = {
  [key: string]: any
}
import myPhoto from '../../../assets/graphics/Me Dark Background square.jpg'
import myCv from '../../../assets/CV Mohamed Ali Ben Thaier 2022 C.pdf'
const info: infoType = {
  'Full Name': 'Mohamed Ali Ben Thaier',
  Age: 27,
  Nationality: 'Tunisian',
  Residency: 'İzmit Turkiye',
  Email: 'med.ali.benthaier@gmail.com',
  Languages: 'Arabic, English, French',
  WhatsApp: '+216 53 458 430',
}

export default function About() {
  return (
    <div id={'about'} className='section-wrapper'>
      <div className='section about d-flex flex-column align-items-center px-4 px-lg-0'>
        <h4>ABOUT ME</h4>
        <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center w-100 gap-4 gap-lg-0 mb-4 mb-lg-0'>
          <div className='col-8 col-lg-6 d-flex flex-column pe-lg-5'>
            <img src={myPhoto} className='w-100' alt='Mohamed Ali Ben Thaier' />
          </div>
          <div className='col-12 col-lg-6 d-flex flex-column align-items-start px-lg-5'>
            <h3>Hi there</h3>
            <p>
              I am a self-taught and hardworking junior frontend developer. Looking to leverage my problem-solving
              skills and passion for web development and build upon my 4+ years of motion design experience by
              transitioning into the software development space
            </p>
            <div className='d-flex col-12 flex-column align-items-start '>
              {Object.keys(info).map((key) => (
                <div className='d-flex col-12' key={key}>
                  <div className='d-flex col-4 justify-content-between pe-3'>
                    <p className=''>{key}</p>
                    <span>
                      <b>:</b>
                    </span>
                  </div>
                  <div className='d-flex col-6'>
                    <p className=''>{info[key]}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-auto mx-auto ms-lg-0'>
              <button className='btn'>
                {' '}
                <a href={myCv} style={{ color: 'inherit', textDecoration: 'none' }} download='true'>
                  {' '}
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
