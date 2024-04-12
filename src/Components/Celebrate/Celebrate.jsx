import React from 'react'
import './Celebrate.css'
import Group1 from '../../assets/backgoundsq (2).png'
import Group2 from '../../assets/selfie.png'
import Group3 from '../../assets/backsq.png'
import Group4 from '../../assets/backgoundsq.png'
import Group5 from '../../assets/backgound.png'



function Celebrate() {

    return (
        <>
            <div className='celebrate'>
                <div className="squre-top">
                    <div className="box1">
                        <img src={Group1} alt="" />
                    </div>
                    <div className="box2">
                        <img src={Group2} alt="" style={{ width: "100%", height: "200px" }} />
                    </div>
                    <div className="box3">
                        <img src={Group3} alt="" style={{ width: "100%", height: "700px" }} />
                    </div>
                </div>
                <div className="mid">
                    <div className="box4">
                        <img src={Group4} alt="" style={{ width: "100%", height: "666px" }} />
                    </div>
                    <div className="box5">
                        <h1>We Celebrate <span className='heading-color' >Success</span></h1>
                        <p>At CaSE we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in
                            celebrating these moments because they underscore the commitment and effort put into each project.
                        </p>
                        <p>Some of our favourite events on the calendar include our coveted Melbourne Cup event and our always amazing Christmas Party. In-between, our
                            team celebrate together during team cycling events, regular team dinners and social morning teas to celebrate milestones and special days. Taking the time to celebrate wins is our way of showing gratitude and ensuring everyone knows their efforts make a difference.</p>
                    </div>
                    <div className="box6">
                        <img src={Group5} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Celebrate



