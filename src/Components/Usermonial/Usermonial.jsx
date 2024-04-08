import React from 'react'
import './Usermonial.css'
import Group from '../../assets/caro2.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

function Usermonial() {
    return (
        <div className='usermonial'>
            <div className="monial-inner">
            <div className="monial-left">
                <img src={Group} alt="image" className='user-img' />
            </div>

            <div className="monial-right">
                <span><FaQuoteLeft size={23} style={{color: "coral"}} /></span>
                <p className='monial-para'>Alyke Company exceeded my expectations! Their services are top-notch, <br /> and their team is incredibly professional. I highly recommend them for anyone seeking quality and satisfaction.</p>
                <p className='user-para' >Employee</p>
                <p className='user-para'>Dania lisa</p>
                <span className='read'><FaRegArrowAltCircleRight size={23} style={{marginRight: "10px"}} />Read my story</span>
            </div>
            </div>
        </div>
    )
}

export default Usermonial
