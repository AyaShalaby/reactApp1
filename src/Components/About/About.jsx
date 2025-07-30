import React from 'react'
import hstyle from '../Home/Home.module.css'
import astyle from '../About/About.module.css'
export default function About() {
  return <>
  <section className={astyle.content}>
    <div className="container">
      <div className="row ">
        <div className="all">
          <h2 className=' text-white fw-bolder text-uppercase fs-1 text-center'>about component</h2>
        <div className="star d-flex gap-2 align-items-center justify-content-center mt-3">
            <div className={hstyle.icons}></div>
                <i className={`fa-solid fa-star text-white `}></i>
            <div className={hstyle.icons}></div>
        </div>
     <div className="row mt-3 px-5">
       <div className="col-md-6 col-sm-12 px-2">
        <div className="cra">
          <p className=' text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="cra">
          <p className=' text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
     </div>
        </div>
      </div>
    </div>
  </section>
  
  </>
}
