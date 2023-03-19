import React, { Fragment } from 'react'
import '../Contact/Contact.css'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { NavLink } from 'react-router-dom'
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";




// IoCall


function Contact(props) {
  return (
    <Fragment>
        <div className='contact-row' ref={props.contactref}>
          <div className="container">
            <div className="row">
              <div className="row">
                <h2 className='text-center mb-5 contact-heading '> Contact-us </h2>
              </div>
              <div className="col-md-5 ">
                <div className="row">
                  <h3 className='text-start '>Contact info: </h3>
                  <div className='cmp-info pt-5 text-start'>
                    <div className="cmp-address mt-2 d-flex">
                      <FaMapMarkedAlt className='info-icon fs-2' />
                      <p>3 Vaishali Residency Pankaj Society, bhathha paldi, Ahmedabad-380007</p>
                    </div>
                    <div className="cmp-contact mt-3">
                      <IoCall className='info-icon' />
                      (+91) 9999999888
                    </div>
                    <div className="cmp-mail mt-3">
                      <SiGmail className='info-icon' />
                      rentify@gmail.com
                    </div>
                  </div>
                </div>
                <div className="bottom-social d-flex flex-row justify-content justify-content-evenly mb-3">
                  <FaFacebookSquare className='social-icons' />
                  <FaInstagram className='social-icons' />
                  <FaTwitter className='social-icons' />
                  <FaLinkedin className='social-icons' />
                </div>
              </div>

              <div className="col-md-7 ">
                <div className="row">
                  <div className="row">
                    <h3 className='text-start mb-5'>Get-in-touch : </h3>
                  </div>
                  <form>

                    <input type="text" placeholder='Enter your Name' />
                    <input type='password' placeholder='Enter your Email' />
                    <textarea rows={5} cols={90} placeholder='Enter your message' />

                    <div className='mt-2'>
                      <NavLink className="contact-submit-btn" to="/login">
                        Submit
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Contact