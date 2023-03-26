import React from 'react'
import Avatar from 'react-avatar';
import '../Profile&Booking/Profile.css'
function Profile() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 profile-image-container  d-flex justify-content-center my-2 ">

                    <div className="user-profile-image m-auto ">
                        <Avatar vkontakteId="1" size="100" src='https://media.licdn.com/dms/image/D4D03AQHIYzfbe-WXjQ/profile-displayphoto-shrink_800_800/0/1678627395721?e=1684368000&v=beta&t=fe1L9BYgOOAYvFRRQj90dAfApSVPt1SIOPxNFgaGynM' />
                        <div className="user-name d-flex fs-5 fw-bold my-4">
                            Aniket Sarvaiya
                        </div>
                    </div>
                </div>
                <div className="col-md-7 profile-info border-left  my-2 ms-1 ">
                    <h1 className='text-start m-4 fs-4'> Profile Data: </h1>
                    <form className='text-start p-4 '>
                        <label>First Name:</label><br />
                        <input type="text" placeholder='Enter First Name' value={"Aniket"} /> <br />
                        <label>Last Name:</label><br />
                        <input type="text" placeholder='Enter Last Name' value={"Sarvaiya"} /><br />
                        <label>Email:</label><br />
                        <input type="text" placeholder='Enter your Email' value={"testmial01@gmail.com"} disabled /><br />
                        <label>Contact:</label><br />
                        <input type="text" placeholder='Mobile Number' value={"+91 9999999999"} /><br />
                        <label>Aadhar Number:</label><br />
                        <input type="text" placeholder='Enter Aadhar Number' value={"1111 2222 3333 4444"} disabled /><br />
                        <label>Address:</label><br />
                        <input type="text" placeholder='Enter your Addres' value={"1-2/abc xyz gujarat"} /><br />
                        <div className="mt-4">
                            <span className="save-btn" onClick={""}>
                                Save
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile