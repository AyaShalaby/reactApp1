import React from 'react'
import fStyle from '../Footer/Footer.module.css'
export default function Footer() {
  return <>
  <footer>
    <div className={fStyle.footUp}>
      <div className='container'>
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3 className='text-uppercase text-white fw-semibold'>location</h3>
            <p className=' text-white'>2215 John Daniel Drive</p>
            <p className=' text-white'>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 mb-4">
              <h3 className='text-uppercase text-white fw-semibold'>around the web</h3>
              <div className=' d-flex  gap-2 justify-content-center mt-4'>
                <i className={`fa-brands fa-facebook text-white ${fStyle.icon}`}></i>
                <i className={`fa-brands fa-twitter text-white ${fStyle.icon}`}></i>
                <i className={`fa-brands fa-linkedin-in text-white ${fStyle.icon}`}></i>
                <i className={`fa-solid fa-globe text-white ${fStyle.icon}`}></i>
              </div>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className='text-uppercase text-white fw-semibold'>about freelancer</h3>
            <p className=' text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>
    <div className={fStyle.footDown}>
      <div className="container pt-3">
        <p className=' text-white text-center'>Copyright © Your Website 2021</p>
      </div>
    </div>
  </footer>
  
  </>
}
