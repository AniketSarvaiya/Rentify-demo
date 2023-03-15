import React, { Fragment } from 'react'
import './Ride.css'
import { FiMapPin } from 'react-icons/fi';
import { BsCalendar2Check } from 'react-icons/bs';
import { MdVerifiedUser } from 'react-icons/md';



function Ride(props) {
    return (
        <Fragment>
            <section ref={props.rideref}>
                <div className="container ride-main-container">
                    <div className="row mt-5 text-center fw-normal">
                        <p className='fst-normal'>
                            How it's work
                        </p>
                        <div className="ride-header fw-bolder">
                            <h1>Rent With 3 Easy Steps</h1>
                        </div>
                    </div>
                    <div className="row mt-5 justify-content-around m-auto">
                        <div className="col-md-4 ride-container ">
                            <div className="icon ">
                                <FiMapPin />
                            </div>
                            <div className="text ">Choose A Location</div>
                            <div className="desc px-xl-5">
                                <p>First of all choose a location to get the cars acording to your location or select the location manually</p>
                            </div>
                        </div>
                        <div className="col-md-4 ride-container">
                            <div className="icon "> <BsCalendar2Check /></div>
                            <div className="text">Pick-up Date</div>
                            <div className="desc px-xl-5">
                                <p>After that select the pick-ip date for rent a car or bike. from which date you want a vehical to wich date</p>
                            </div>
                        </div>

                        <div className="col-md-4 ride-container ">
                            <div className="icon">
                                <MdVerifiedUser />
                            </div>
                            <div className="text">Book A Car</div>
                            <div className="desc px-xl-5"></div>
                            <p>
                                Make payment by selecting payment method for your timing to rent a car or bike and enjoy your safe and secure ride
                            </p></div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Ride