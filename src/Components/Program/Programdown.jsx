import React from 'react'
import Group from '../../assets/group.png'
import Group2 from '../../assets/backgoundsq (3).png'
import Group3 from '../../assets/banner.png'
import './Program.css'

function Programdown() {
  return (
    <div className='programdown'>
      <div className="down-left">
        <img src={Group} alt="" className="down-img" />
      </div>

      <div className="down-mid">
        <img src={Group2} alt="" className="down-img" />
      </div>
      <div className="down-right">
        <img src={Group3} alt="" className="down-img" />
      </div>
    </div>
  )
}

export default Programdown
