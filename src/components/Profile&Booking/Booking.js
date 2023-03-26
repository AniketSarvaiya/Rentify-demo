import React, { Fragment } from 'react'
import BookingCard from './BookingCard'

function Booking() {
    return (

        <Fragment>
            <div className='container mt-5'>
                <div className='d-flex flex-wrap justify-content-evenly'>
                    <BookingCard status={'complate'} />
                    <BookingCard status={'complate'} />
                    <BookingCard />
                </div>
            </div>
        </Fragment>
    )
}

export default Booking