import React, { Fragment } from 'react'
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md'
import { BsGearWideConnected } from 'react-icons/bs'
import { BsFillFuelPumpFill } from 'react-icons/bs'
import '../CBComponent/CBItem.css'



function CBItem(props) {
    console.log(props.url)
    return (
        <Fragment>
            <div className="col-md-3 border px-2 py-1 my-4 mx-4 car-card shadow-sm">
                <div className="row car-img justify-content-center">
                    <img src={(props.url === undefined) ? "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/141113/venue-exterior-right-front-three-quarter.jpeg?isig=0&q=75" : props.url} />
                    {/* <img src='https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/141113/venue-exterior-right-front-three-quarter.jpeg?isig=0&q=75' /> */}
                </div>
                <div className="row car-name fw-bold justify-content-center fs-6 pb-3"> Hyundai Venue </div>
                <div className="car-rent-info fw-bold fs-6 d-flex flex-row justify-content-start ms-2">
                    <div className='car-rent-rupee'>₹</div>
                    <div className='car-rent'>400 </div>
                    <div className='car-rent-day'> /Day </div>
                </div>
                <hr />
                <div className="car-info d-xl-flex flex-md-row justify-content-evenly pb-3">
                    <div className="gear-type ">
                        <BsGearWideConnected className='info-icon' /> Automatic
                    </div>
                    <div className="seater">
                        <MdOutlineAirlineSeatReclineExtra className='info-icon' />5-Seater
                    </div>
                    <div className="fuel-type">
                        <BsFillFuelPumpFill className='info-icon' /> Pertol
                    </div>
                </div>
                <div className='row px-2'>
                    <button className='btn-book'>Rent Now</button>
                </div>
            </div>
        </Fragment>
    )
}

export default CBItem