import React from 'react';
import '../css/nav.css';
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <>
      
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img style={{ maxHeight: '28.293963254593173px',maxWidth: '220px' }} src="public/images/e-com-logo.avif" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto  mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Articles</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Our Story
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">Contact</a>
                        </li>
                    </ul>
                   

                    <ul className='icons'>
                        <li><a href=""><CiSearch /></a></li>
                        <li><a href=""><IoBagOutline /></a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;