import { BrowserRouter, Route, Switch, Routes, useLocation } from 'react-router-dom';
import './App.css';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar/MyNavbar';
// import Bikes from './components/Bikes';
import PageError from './components/PageError';
// import Ride from './components/Ride/Ride';
import MainFeed from './components/MainFeed';
import Login from './components/Login&Register/Login';
import Register from './components/Login&Register/Register';
import Cars from './components/Cars';
import { useEffect, useRef, useState } from 'react';
import Profile from './components/Profile&Booking/Profile';
import Booking from './components/Profile&Booking/Booking';
// import Main from './Main';
// import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  const homeref = useRef(null);
  const rideref = useRef(null);
  const aboutref = useRef(null);
  const contactref = useRef(null);

  const [activeNavbar, setActiveNavbar] = useState("false");
  const [currentActive, setCurrentActive] = useState('home');

  const locationpath = useLocation();
  const hidenavbar =
    locationpath.pathname === '/login' || locationpath.pathname === "/register";

  const scrolltosection = (path) => {
    if (path === 'home') {
      window.scrollTo({
        top: homeref.current.offsetTop,
        behavior: "smooth"
      });
    } else if (path === 'ride') {
      window.scrollTo({
        top: rideref.current.offsetTop,
        behavior: "smooth"
      });
    } else if (path === 'about') {
      window.scrollTo({
        top: aboutref.current.offsetTop,
        behavior: "smooth"
      });
    } else if (path === 'contact') {
      window.scrollTo({
        top: contactref.current.offsetTop,
        behavior: "smooth"
      });
    }

    // setCurrentActive(pageName);
    // console.info(toelement.current);
  };

  const location = window.location.pathname;
  // console.log("============" + location);

  useEffect(() => {

    window.addEventListener('scroll', function () {
      setTimeout(() => {
        // console.info(location)
        if (location === '/') {
          const observable = {
            home: homeref.current,
            ride: rideref.current,
            about: aboutref.current,
            contact: contactref.current
          }
          const pos = {
            home: observable.home.getBoundingClientRect(),
            ride: observable.ride.getBoundingClientRect(),
            about: observable.about.getBoundingClientRect(),
            contact: observable.contact.getBoundingClientRect()
          }


          if (pos.home.top < window.innerHeight && pos.home.bottom >= 0) {
            setCurrentActive('home')

          } else if (pos.ride.top < window.innerHeight && pos.ride.bottom >= 0) {
            setCurrentActive('ride')
          }
          else if (pos.about.top < window.innerHeight && pos.about.bottom >= 0) {
            setCurrentActive('about')
          }
          else if (pos.contact.top < window.innerHeight && pos.contact.bottom >= 0) {
            setCurrentActive('contact')
          }
        }
        // }, 200);
      });
    }, [])
  });
  return (
    <div className="App">
      {!hidenavbar &&
        <MyNavbar setCurrentActive={setCurrentActive} homeref={homeref} rideref={rideref} aboutref={aboutref} contactref={contactref} scrolltosection={scrolltosection} currentActive={currentActive} />
      }
      <Routes>
        {/* <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />*/}
        <Route path="/cars" element={<Cars />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<Booking />} />
        {/* <Route path="/bikes" element={<Bikes />} /> */}
        {/* <Route path='/*' element={<PageError />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<MainFeed homeref={homeref} rideref={rideref} aboutref={aboutref} contactref={contactref} scrolltosection={scrolltosection} currentActive={currentActive} />} />
        {/* <Route path='/' element={<Main setCurrentActive={setCurrentActive} homeref={homeref} rideref={rideref} aboutref={aboutref} contactref={contactref} scrolltosection={scrolltosection} currentActive={currentActive} />} /> */}
      </Routes>
      {/* <Login/> */}
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
