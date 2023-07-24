import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/return" className="nav-link active" aria-current="page" href="#">HOME</Link>
                            </li>

                            <li className="nav-item">
                                <Link  to="/addProduct" className="nav-link active" aria-current="page" href="#">POST</Link>
                            </li>

                            <li className="nav-item">
                                <Link  to="/" className="nav-link active" aria-current="page" href="#">DASHBOARD</Link>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>
    )
}

export default Navbar;