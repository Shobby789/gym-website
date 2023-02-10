import './Members.css';
// import memberImg from '../imgs/john.jpg';

import React from 'react'

export default function Members() {
  return (
    <div className='member'>
      <h1 className='text-uppercase fw-bolder text-white'>Don't <span className='text-danger'>think</span>, begin <span className='text-danger'>today!</span>
      </h1>
      {/* <div> */}
      <p className='py-3 text-white opacity-8'>
        Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. <br />Morbi tempus mauris a nisi luctus imperdiet.
        </p>
      {/* </div> */}
      <button className="btn text-white text-uppercase p-3 mt-3">become a member</button>
    </div>
    )
}