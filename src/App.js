import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar/MyNavbar';
import Cars from './components/Cars';
import Bikes from './components/Bikes';
import PageError from './components/PageError';
import Ride from './components/Ride/Ride';
// import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path='/*' element={<PageError />} />
          <Route path='/ride' element={<Ride/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
