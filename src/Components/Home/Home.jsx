import React from 'react'
import './Home.css'
import Homeimg from '../../assets/home.jpeg'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div className='home'>
        <Navbar />
      <img src={Homeimg} alt="auth-img" className='home-img' />
    </div>
  )
}

export default Home
