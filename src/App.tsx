import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'



const App = () => {
  return (
    <>
    <div>
     <Navbar/>
     <div className='cards'>
     <Card title="NITI RAJ" comment="good boy"/>
     <Card title="ABHINAV RAJ" comment="bad boy"/>
     <Card title="ARAV RAJ" comment="small boy"/>

     </div>
     <Footer/>

     
     </div>

     
    </>
    
      
  )
}

export default App