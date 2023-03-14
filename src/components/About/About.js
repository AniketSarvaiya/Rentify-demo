import React from 'react'
import Avatar from 'react-avatar';
import { SiGmail } from 'react-icons/si';
import { TfiLinkedin } from 'react-icons/tfi';
import { GrInstagram } from 'react-icons/gr';


import '../About/About.css'

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="about-heading  mt-5">
                    <h2>About Us</h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-xl-6">
                    <div className="about-text-heading text-start m-2 fw-bold">
                        <h3> Renti<span className='fy fw-bold'>Fy </span> :</h3>
                    </div>
                    <div className="about-text-desc text-start">
                        <p>Rentify is marketplace for cars or bikes on rent. From short road trips to quick in-city drives for groceries, supply pick-up, food runs, Rentifyhave the cheapest car rental options for all your needs!</p>
                        <p>With Rentify you can experience the convenience of online booking. The cars listed on our platform come with all-India permits that include vehicle insurance. It is extremely easy to pick up the car from the host location.  From short road trips to quick in-city drives for groceries, supply pick-up, meeting friends and family, doctor visits, business trips, we have the cheapest car rental options for all your needs</p>
                    </div>
                </div>
                <div className="col-xl-6 mt-md-1 mt-3">
                    <div className="row ms-4 fw-bold fs-5 mb-3"> Team :</div>
                    <div className="row text-center justify-content-evenly">
                        <div className="col-sm-3">
                            <div className="row justify-content-center">
                                <Avatar vkontakteId="1" size="150" src='https://media.licdn.com/dms/image/D4D03AQHIYzfbe-WXjQ/profile-displayphoto-shrink_800_800/0/1678627395721?e=1684368000&v=beta&t=fe1L9BYgOOAYvFRRQj90dAfApSVPt1SIOPxNFgaGynM' />
                                <div className="row team-name mt-4 mb-4 justify-content-center"> Aniket Sarvaiya</div>
                                <div className=" about-icon d-flex flex-row justify-content-evenly mb-5">
                                    <SiGmail className='icons'/>
                                    <TfiLinkedin className='icons'/>
                                    <GrInstagram className='icons'/></div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="row justify-content-center">
                                <Avatar vkontakteId="1" size="150" src='https://media.licdn.com/dms/image/D4D03AQHjFCO9PXKy-A/profile-displayphoto-shrink_800_800/0/1675186820246?e=1684368000&v=beta&t=cf_AWrl8Nz-32s7ndOtr51gbhAAgtX_0bG_yURaoKPY' />
                                <div className="row team-name mt-4 mb-4 justify-content-center"> Vishwa Aashara</div>
                                <div className="about-icon d-flex flex-row justify-content-evenly mb-5">
                                    <SiGmail className='icons'/>
                                    <TfiLinkedin className='icons'/>
                                    <GrInstagram className='icons'/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About