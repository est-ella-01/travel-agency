import { useState } from 'react'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound'
import { About } from './pages/About'
import { OurTours } from './pages/OurTours'
import { Contact } from './pages/Contact'
import { Tour } from './components/Tour'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import './App.css'


export const App=()=>{
 
  return (
    <>
      <div className='main-container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tours' element={<OurTours />} />
        <Route path='/tours/:id' element={<Tour />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      </div>
    </>
  )
}


