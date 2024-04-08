import React from 'react'
import './Globe.css'
import { IoMdArrowForward } from "react-icons/io";
import Worldmap from '../../assets/worldmap.png'

function Globe() {
  return (
    <div className='globe'>
      <div className="globe-up">
        <h2 className='globe-heading'>As a <span className='heading-color'>global business</span>we encourage you to connect <br /> us no matter where you are located in the world</h2>
        <p>Brouse our job opportunities accross the world</p>
        <span className='open-roles'>OPEN ROLES <IoMdArrowForward size={23} style={{color: "coral", marginLeft: "15px"}} /> </span>
      </div>
      <div className="globe-down">
        <img src={Worldmap} alt="worldmap-png" className="globe-map" />
      </div>
    </div>
  )
}

export default Globe
