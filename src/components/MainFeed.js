import React, { useEffect, useState } from 'react'
import Ride from './Ride/Ride'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import MyNavbar from './Navbar/MyNavbar'
import { useRef } from 'react';
import CBItem from './CBComponent/CBItem'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Cars from './Cars'
// import Bikes from './Bikes'
// import PageError from './PageError'
// import Login from './Login&Register/Login'

function MainFeed(props) {
  return (
    <>
      <div className='mt-3 container-main'>
        <Home homeref={props.homeref} />
        <Ride rideref={props.rideref} />
        <About aboutref={props.aboutref} />
        <Contact contactref={props.contactref} />
      </div>
    </>
  )
}

export default MainFeed