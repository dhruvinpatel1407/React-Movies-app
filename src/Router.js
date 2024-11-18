import React from 'react'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Moviedetails from './Component/Moviedetails'
import Movie from './Component/Movie'
import Login from './Login'
import Feedbackcard from './Component/Feedbackcard'
import Footer from './Component/Footer'
function Router() {
  return (
    <>
    <BrowserRouter> 
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<Movie/>} />
        <Route path="/movie-world/:formType" element={<Login />}/> 
        <Route path="/movies/:movies_Title" element={<Moviedetails />} />
        <Route path="/contact/feedback" element={<Feedbackcard/>}></Route>
    </Routes>
    <Footer />
    </BrowserRouter></>
  )
}

export default Router