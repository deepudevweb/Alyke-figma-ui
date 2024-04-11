import React from 'react';
import './Pagenavigate.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";

function Pagenavigate() {

  return (
    <div className='navigate'>
      <div className="gopage">
        <p className='nav-count'>01</p>
        <div className="page">
          <span>We stay connected</span>
          <a href="#"><CiCircleChevRight color='white' size={40} /></a>
        </div>
      </div>
      <div className="gopage">
        <p className='nav-count'>02</p>
        <div className="page">
          <span>We believe in diversity &
            inclusion</span>
          <a href="#"><CiCircleChevRight color='white' size={40} /> </a>
        </div>
      </div>
      <div className="gopage">
        <p className='nav-count'>03</p>
        <div className="page">
          <span>We celebrate success</span>
          <a href="#"><CiCircleChevRight color='white' size={40} /> </a>
        </div>
      </div>
      <div className="gopage">
        <p className='nav-count'>04</p>
        <div className="page">
          <span>Employee appreciations program</span>
          <a href="#"><CiCircleChevRight color='white' size={40} /> </a>
        </div>
      </div>
      <div className="gopage">
        <p className='nav-count'>05</p>
        <div className="page">
          <span>global business</span>
          <a href="#"><CiCircleChevRight color='white' size={40} /> </a>
        </div>
      </div>
    </div>
  )
}

export default Pagenavigate





