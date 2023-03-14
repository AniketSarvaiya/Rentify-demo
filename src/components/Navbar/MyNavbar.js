import '../Navbar/MyNavbar.css'
import { NavLink } from 'react-router-dom'

function MyNavbar() {
    // const location = useLocation();

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
                                        <li className="nav-item active">
                                            <NavLink to='/' className="nav-link" >Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/ride' className="nav-link" >ride</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/cars' className="nav-link" >Cars</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/bikes' className="nav-link" >Bikes</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/about' className="nav-link" >About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/contact' className="nav-link">Contact</NavLink>
                                        </li>

                                    </ul>

                                    <form classNAme="d-flex">
                                        <NavLink className="btn-login" to="/"> Login</NavLink>
                                    </form>
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