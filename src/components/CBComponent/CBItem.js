import React, { Fragment } from 'react'
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md'


function CBItem() {
    return (
        <Fragment>
            <div className="item-container">
                <div className="col-3">
                    <div className="row car-img justify-content-center">
                        <img src='https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/141113/venue-exterior-right-front-three-quarter.jpeg?isig=0&q=75' />
                    </div>
                    <div className="row car-name"> Hyundai Venue </div>
                    <div className="row car-rent"> ₹ 400/Day </div>
                    <div className="row car-info">
                        <div className="gear-type">

                        </div>
                        <div className="seater">
                            <MdOutlineAirlineSeatReclineExtra />
                            <p> 5 Seater</p>
                        </div>
                        <div className="fuel-type"></div>
                    </div>
                    <div className="row">
                        <button className='btn-book'></button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CBItem