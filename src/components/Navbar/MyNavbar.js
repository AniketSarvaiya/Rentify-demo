import '../Navbar/MyNavbar.css'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import Avatar from 'react-avatar';

function MyNavbar(props) {

    const location = window.location.pathname;

    const navigate = useNavigate();

    const navigateToSection = (path) => {

        // console.info(location)
        if (location === '/') {
            props.scrolltosection(path)
        } else {
            navigate('/')
            setTimeout(() => {
                props.scrolltosection(path)
                props.setCurrentActive(path)
            }, 200);
        }
    }

    return (
        <div className="header-main bg-light sticky-top">
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <NavLink className="navbar-brand " to="/">Renti<span>Fy</span></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                        <li className="nav-item ">
                                            <span
                                                onClick={() => {
                                                    navigateToSection('home')
                                                }}
                                                className={`nav-link ${props.currentActive === 'home' ? 'active-link' : ''} `} >Home</span>
                                        </li>
                                        <li className="nav-item">
                                            <span onClick={() => {
                                                navigateToSection('ride')
                                            }}
                                                className={`nav-link ${props.currentActive === 'ride' ? 'active-link' : ''} `} >ride</span>
                                        </li>
                                        <li className="nav-item">
                                            <span onClick={() => {
                                                navigate("/cars")
                                                props.setCurrentActive('cars')
                                            }}
                                                className={`nav-link ${props.currentActive === 'cars' ? 'active-link' : ''} `} >Cars</span>
                                        </li>
                                        <li className="nav-item">
                                            <span className="nav-link" >Bikes</span>
                                        </li>
                                        <li className="nav-item">
                                            <span
                                                onClick={() => {
                                                    navigateToSection('about')
                                                }}
                                                className={`nav-link ${props.currentActive === 'about' ? 'active-link' : ''} `}  >About</span>
                                        </li>
                                        <li className="nav-item">
                                            <span to="/"
                                                onClick={() => {
                                                    navigateToSection('contact')
                                                }}
                                                className={`nav-link ${props.currentActive === 'contact' ? 'active-link' : ''} `} >Contact</span>
                                        </li>

                                    </ul>
                                    <div className="profile-menu d-flex flex-row">
                                        <ul className='navbar-nav m-auto mb-2 mb-lg-0'>
                                            <li className="nav-item profile">
                                                <span onClick={() => {
                                                    navigate("/booking")
                                                    props.setCurrentActive('booking')
                                                }}
                                                    className={`nav-link ${props.currentActive === 'booking' ? 'active-link' : ''} `} >Booking</span>
                                            </li>
                                            <li className="nav-item d-flex profile">
                                                <span onClick={() => {
                                                    navigate("/profile")
                                                    props.setCurrentActive('profile')
                                                }}
                                                    className={`nav-link ${props.currentActive === 'profile' ? 'active-link' : ''} `} >
                                                    Profile
                                                </span>
                                                <Avatar className='profile-avtar text-center ms-1' vkontakteId="1" size="35" src='https://media.licdn.com/dms/image/D4D03AQHIYzfbe-WXjQ/profile-displayphoto-shrink_800_800/0/1678627395721?e=1684368000&v=beta&t=fe1L9BYgOOAYvFRRQj90dAfApSVPt1SIOPxNFgaGynM' />

                                            </li>

                                        </ul>
                                        <form className="d-flex">
                                            <Link className="btn-login" to="/login" onClick={() => {
                                                navigate('/login');
                                                // console.log("==============");
                                            }}> Login</Link>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default MyNavbar;