import { Player } from '@lottiefiles/react-lottie-player'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import '../Login&Register/Login'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

function Register() {
    return (
        <Fragment>
            <section className='register-container'>
                <div className="container">
                    <div className="lr-container">
                        <div className="row register-box shadow ">
                            <div className="d-flex flex-row justify-content-between ">
                                <div>
                                    <NavLink to="/login">
                                        <IoArrowBackCircleOutline className='fs-2 text-dark' />
                                        {/* <IoArrowBackSharp className='fs-4  text-dark'/> */}
                                    </NavLink>
                                </div>
                                <div >
                                    <h2 className='fw-bold text-end fs-4'>Renti<span className='fy fw-bold'>Fy</span></h2>
                                </div>
                            </div>
                            <div className=" col-xl-6 col-md-0 col-sm-0 register-animation mb-2">
                                <Player className='register-animation-player d-none d-xl-flex d-sm-none mb-1'
                                    autoplay
                                    loop
                                    src="https://lottie.host/5b633d7c-e949-4a89-88fe-528ff7a29dd7/bTg2M9GHJp.json"
                                    style={{ height: '500px', width: '430px' }}
                                >
                                </Player>
                            </div>
                            <div className="col-xl-6 col-md-12 col-sm-12 justify-content-center ">
                                <form>
                                    <h1 className='text-center m-3'> REGISTER </h1>
                                    <input type="text" placeholder='First Name' />
                                    <input type="text" placeholder='Last Name' />
                                    <input type="text" placeholder='Enter your Email' />
                                    <input type="text" placeholder='Mobile Number' />
                                    <input type="text" placeholder='Enter your Password' />
                                    <input type='password' placeholder='Enter Confirm password' />
                                    <div className='mt-5 mb-4'>
                                        <NavLink className="register-btn mt-5 " to={"/login"}>
                                            Register
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Register