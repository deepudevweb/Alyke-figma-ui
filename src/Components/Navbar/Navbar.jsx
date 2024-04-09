import React from 'react'
import './Navbar.css'
import Navlogo from '../../assets/logo.png'

function Navbar() {
  document.addEventListener('scroll', ()=> {
    const header = document.querySelector('header')
    if (window.scrollY > 0) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
  })

    return (
        <header className='navbar'>
            <div className="link-zone1">
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

            <div className="link-zone2">
                <ul>
                    <li><a href="#" className='navlink'>CAREERS</a></li>
                    <li><a href="#" className='navlink'>AU</a></li>
                </ul>

            </div>
            </header>
            )
}

            export default Navbar
