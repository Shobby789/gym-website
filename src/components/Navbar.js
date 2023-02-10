import './Navbar.css'
import React from 'react'

export default function Navbar() {
  return (
    <>
        <div className='container-fluid myNav sticky'>

            <h2 className='logo py-3 text-light float-start'>TRAINING STUDIO</h2>

            <ul className="nav justify-content-end py-3 px-5">
                <li className="nav-item">
                    <a className="nav-link text-light" href="home">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="about">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="classes">CLASSES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="SCHEDULES">SCHEDULES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="contact">CONTACT</a>
                </li>
            </ul>
            
        </div>
    </>
  )
}
