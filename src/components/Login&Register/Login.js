import React, { Fragment } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import '../Login&Register/Login.css'
import { NavLink } from 'react-router-dom'
import { IoArrowBackCircleOutline } from 'react-icons/io5'




function Login() {
    return (
        <Fragment>
            <section className='login-container'>
                <div className="container">
                    <div className="lr-container">
                        <div className="row login-box shadow">
                            <div className="d-flex flex-row justify-content-between ">
                                <div>
                                    <NavLink to="/">
                                        <IoArrowBackCircleOutline className='fs-2 text-dark' />
                                        {/* <IoArrowBackSharp className='fs-4  text-dark'/> */}
                                    </NavLink>
                                </div>
                                <div>
                                    <h2 className='fw-bold text-end '>Renti<span className='fy fw-bold'>Fy</span></h2>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12 col-sm-12 justify-content-center">
                                <form>
                                    <h1 className='text-center mt-5 mb-5'> LOGIN </h1>
                                    <input type="text" placeholder='Enter your Email' />
                                    <input type='password' placeholder='Enter your password' />
                                    <p className='mt-5'> <NavLink className='forgot-psw'> Forgot your password ?</NavLink> </p>
                                    <div className='mt-3'>
                                        <NavLink className="login-btn" to="/">
                                            Login
                                        </NavLink>
                                    </div>
                                    <p className='mt-3'>
                                        <NavLink className='register' to='/register'>
                                            or REGISTER ?
                                        </NavLink>
                                    </p>
                                </form>
                            </div>

                            <div className=" col-xl-6 col-md-0 col-sm-0 login-animation mb-2">
                                <Player className='login-animation-player d-none d-xl-flex d-sm-none mb-1'
                                    autoplay
                                    loop
                                    src="https://lottie.host/df738b4c-4237-4a4a-ba3e-7f78faca4f74/kqNNCAj4vX.json"
                                    style={{ height: '400px', width: '570px' }}
                                >
                                </Player>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Login

// <Player
// autoplay
// loop
// src="https://lottie.host/df738b4c-4237-4a4a-ba3e-7f78faca4f74/kqNNCAj4vX.json"
// style={{ height: '300px', width: '300px' }}
// >
// </Player>