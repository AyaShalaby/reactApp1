import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import style from '../Navbar/Navbar.module.css'
export default function Navbar() {
const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>50){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    };
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll);
  },[])
  return <>
   <nav className={`${style.navbar} ${scrolled?style.shrink:''} navbar navbar-expand-lg navbar-light  fixed-top`}>
  <div className="container">
    <NavLink className="navbar-brand text-uppercase text-white fw-bolder fs-2" to={'/'}>Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ms-3">
          <NavLink className="nav-link text-uppercase text-white fw-bolder" to={'about'}>About</NavLink>
        </li>
        <li className="nav-item ms-3">
          <NavLink className="nav-link text-uppercase text-white fw-bolder" to={'portfolio'}>portfolio</NavLink>
        </li>
        <li className="nav-item ms-3">
          <NavLink className="nav-link text-uppercase text-white fw-bolder" to={'contact'}>contact</NavLink>
        </li>
        
      </ul>
       
    </div>
  </div>
</nav>
  
  </>
}
