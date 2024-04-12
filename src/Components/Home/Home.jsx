import React from 'react'
import './Home.css'
import Homeimg from '../../assets/home.jpeg'


import { Carousel } from '../Carousel/Carousel';

function Home() {



  return (
    <div className='home' >
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
      <div className='home-inner' style={{backgroundImage: `url(${Homeimg})`, objectFit: 'cover', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
      <div className='home-inner' style={{backgroundImage: `url(${'https://cdn.dribbble.com/users/12645074/screenshots/19180000/media/156aea9e3414ad6e6bd9dd5a83ae7fdb.png?resize=768x576&vertical=center'})`, objectFit: 'cover', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
      <div className='home-inner' style={{backgroundImage: `url(${"https://cdn.dribbble.com/userupload/7083373/file/original-395f9420c55f8e1b87d5430b6947f057.jpg?resize=1024x1024"})`, objectFit: 'cover', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="texts">
            <p>Home / Why work with us</p>
            <h1>Headline #1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  )
}
