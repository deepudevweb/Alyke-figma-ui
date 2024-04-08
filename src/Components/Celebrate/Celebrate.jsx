import React from 'react'
import './Celebrate.css'
import Group1 from '../../assets/backgoundsq (2).png'
import Group2 from '../../assets/selfie.png'   
import Group3 from '../../assets/backsq.png'   
import Group4 from '../../assets/backgoundsq.png'   
import Group5 from '../../assets/backgound.png'   

function Celebrate() {
    return (
        <div className='celebrate'>
            <div className="container">
                <img src={Group1} className="top-right" alt="Image 1" />
                <img src={Group2} className="top-mid" alt="Image 2" />
                <img src={Group3} className="full-height" alt="Image 3" />
                <img src={Group4} className="mid-left" alt="Image 4" />
                <div className="text-content">Your text content here</div>
                <img src={Group5} className="bottom-right" alt="Image 5" />
            </div>
        </div>
    )
}

export default Celebrate
