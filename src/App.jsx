import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import BookMonth from './components/BookOfTheMothe/BookMonth'
import Readings from './components/ReadingsHistory/Readings'
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar'  
import Footer from './components/Footer/Footer'  
export default function App(){
  return (
    <div className="app">
  <AnnouncementBar />
  <NavBar />
  <Hero />
  <About />
  <BookMonth />
  <Readings />
  <Footer />
    </div>
  )
}
