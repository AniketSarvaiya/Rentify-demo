import React from 'react'
import Ride from './Ride/Ride'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import MyNavbar from './Navbar/MyNavbar'
import { useRef } from 'react';


function MainFeed() {

    const homeref = useRef(null);
    const rideref = useRef(null);
    const aboutref = useRef(null);
    const contactref = useRef(null);

    const scrolltosection = (toelement) => {
        window.scrollTo({
            top: toelement.current.offsetTop,
            behavior: "smooth"
        });
    };
    return (
        <>
                <MyNavbar  homeref= {homeref} rideref={rideref} aboutref = {aboutref}  contactref = {contactref}  scrolltosection={scrolltosection}/>
                <div className='mt-3'>
                    
                    <Home homeref= {homeref}/>
                    <Ride rideref={rideref} />
                    <About aboutref = {aboutref}/>
                    <Contact contactref = {contactref}/>
                </div>
        </>
    )
}

export default MainFeed