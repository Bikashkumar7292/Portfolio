import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Portfolio from './Component/Portfolio'
import Experince from './Component/Experince'
import Footer from './Component/Footer'
import Contaact from './Component/Contaact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
   <>

   <div>
     <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experince/>
    <Contaact/>
    <Footer/>
    </div>
    <Toaster/>



   </>
  )
}

export default App
