import React from 'react'
import './Navbar.css'
import Navlogo from '../../assets/logo.png'
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from 'react-icons/fa';

function Navbar() {
  document.addEventListener('scroll', ()=> {
    const header = document.querySelector('header')
    if (window.scrollY > 0) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
  })

  const [open, setOpen] = React.useState(false)

    return (
        <header className='navbar'>
            <div className="hamberger" >
                {open ? <FaTimes color='white' size={30} onClick={() => setOpen(!open)} /> : <CiMenuFries color='white' size={30} onClick={() => setOpen(!open)} />}
            </div>
            <div className={open ? 'navlinks open' : 'navlinks'}>
                <div className="links">PROJECTS</div>
                <div className="links">EXPERTISE</div>
                <div className="links">ABOUT US</div>
                <div className="links">PEOPLE</div>
                <div className="links">CAREERS</div>
                <div className="links">AU</div>
            </div>
            <div className="link-zone1 flex1 MobileHide">
                <ul>
                    <li><a href="#" className='navlink'>PROJECTS</a></li>
                    <li><a href="#" className='navlink'>EXPERTISE</a></li>
                    <li><a href="#" className='navlink'>ABOUT US</a></li>
                    <li><a href="#" className='navlink'>PEOPLE</a></li>
                </ul>
            </div>

            <div className="logo">
                <img src={Navlogo} alt="logo" className="nav-logo" />
            </div>

            <div className="link-zone2 flex1 MobileHide">
                <ul>
                    <li><a href="#" className='navlink'>CAREERS</a></li>
                    <li><a href="#" className='navlink'>AU</a></li>
                </ul>

            </div>
            </header>
            )
}

            export default Navbar
