import React from 'react'
import './Home.css'
import Homeimg from '../../assets/home.jpeg'


import { Carousel } from '../Carousel/Carousel';

function Home() {
  return (
    <div className='home'>
      <Carousel>
        <Carousel1/>
        <Carousel2/>
        <Carousel3/>
      </Carousel>
       
    </div>
  )
}

export default Home


function Carousel1() {
  return (
    <div>
      <div className='home-inner' style={{backgroundImage: `url(${Homeimg})`}}>
        <div className="texts">
            <p>Home / Why work with us</p>
            <h1>Headline #2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
      </div>
    </div>
  )
}
function Carousel2() {
  return (
    <div>
      <div className='home-inner' style={{backgroundImage: `url(${'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg'})`, transition: 'all 0.5s ease'}}>
        <div className="texts">
            <p>Home / Why work with us</p>
            <h1>Headline #3</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  )
}
function Carousel3() {
  return (
    <div>
      <div className='home-inner' style={{backgroundImage: `url(${Homeimg})`}}>
        <div className="texts">
            <p>Home / Why work with us</p>
            <h1>Headline #1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  )
}
