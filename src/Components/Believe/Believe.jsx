import React from 'react'
import './Believe.css'
import Graph from '../../assets/graph.png'

function Believe() {
    return (
        <div id='believe' className='believe'>
            <div className="conatiner-top">
                <div className="cont-left">
                    <h2 className='believe-heading'>We believe in <span className='heading-color'>diversity & <br /> inclusion</span></h2>
                </div>
                <div className="cont-right">
                    <p className='believe-para1'>At CaSE we do not just accept difference we celebrate it, we support it, and we
                        thrive on it for the benefit of our employees, our services, our industry and our community. We are proud to be an equal opportunity employer. Guided by our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them.
                    </p>
                    <p className='believe-para2'>Our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them Our Commitment to reinventing the standard. With more than 20 nationalities represented in our global workforce, we firmly believe that our ability to deliver high-quality results is fueled by our active efforts to embed diversity and inclusion. We recognise, respect, and strive to create an environment where employees can excel and feel a true sense of belonging,</p>
                    <p className='believe-para3'> some of our strategic include</p>
                </div>
            </div>
            <div className="graph-zone">
                <img src={Graph} alt="gr-ph" className='graph-img' />
            </div>
        </div>
    )
}

export default Believe

