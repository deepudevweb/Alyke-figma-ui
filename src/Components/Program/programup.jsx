import React from 'react'
import './Program.css'
import Programimage from '../../assets/backgoundsq (4).png'

function Programup() {
  return (
    <div className='programup'>
      <div className="prog-left">
        <h1>Employee <span className='heading-color'>Appreciations Program</span></h1>
        <p>Our Employee Appreciation Program is tailored to honor the ongoing commitment and efforts of our long-serving team members. Our 5 Year Club and 10 Year Club are special milestones within this program, celebrating employees who have dedicated half a decade or a full decade to our company mission. Each year, members of these clubs are invited to annual events held at select, memorable locations, reflecting our gratitude and recognition of their unwavering dedication. It's our way of saying thank you and ensuring that every significant chapter in our collective journey is celebrated with the grandeur it deserves</p>
      </div>

      <div className="prog-right">
        <img src={Programimage} alt="prog-img" className='prog-img' />
      </div>
    </div>
  )
}

export default Programup
