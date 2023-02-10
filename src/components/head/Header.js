import React from 'react'
import './Header.css'
// import img1 from "./images/1.jpg";

export default function Header() {
  return (
    <div className='head'>
      <div className="container myContainer">
        <h4 className='text-uppercase fs-3 fw-bolder'>work harder, get stronger</h4>
        <h1  className='text-uppercase fw-bolder'>easy with our <span className="orangered">gym</span></h1>
        <button className="btn fw-bold text-white">Subscribe</button>
      </div>
    </div>
  )
}
