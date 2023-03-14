import React from 'react'
import '../Home/Home.css'
import CarImage from '../../Images/Car-Design.png'
function Home() {
  return (
    <section className='home-section lg'>
      <div className="container">
        <div className="row justify-content-between">
          <div className="home-text-section col-lg-4 align-self-center order-1 order-lg-1 order-md-2 order-sm-2  mt-sm-5 mt-5">
            <div className="home-text ">
              <h1 className='text-start '> <span>Looking </span> to Rent a Car or Bike</h1>
            </div>
            <div className="home-sub-text mt-2 text-start ">
              <p >Rent the best quiality cars &  bikes with us. Book Online in a Few Simple Steps </p>
            </div>
          </div>
          <div className="home-img-section col-lg-7 order-2 order-lg-2 order-md-1 order-sm-1 d-none d-lg-block d-sm-none">
            <div className="home-img pt-4">
              <img src={CarImage} alt='Car'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home