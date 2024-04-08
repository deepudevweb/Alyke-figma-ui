import React from 'react'
import Home from './Components/Home/Home'
import Pagenavigate from './Components/Navigate/Pagenavigate'
import Connected from './Components/Connected/Connected'
import Believe from './Components/Believe/Believe'
import Program from './Components/Program/Program'
import Globe from './Components/Globe/Globe'
import Footer from './Components/Footer/Footer'
// import Celebrate from './Components/Celebrate/Celebrate'



function App() {
  return (
    <div>
      <Pagenavigate />
      <Connected />
      <Believe />
      {/* <Celebrate /> */}
      <Program />
      <Globe />
      <Footer />
    </div>
  )
}

export default App
