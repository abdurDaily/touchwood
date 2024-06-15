import React from 'react';
import '../css/nav.css';
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
      
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img style={{ maxHeight: '28.293963254593173px',maxWidth: '220px' }} src="public/images/e-com-logo.avif" alt="" />
                    </a>
                    <button style={{ backgroundColor:"transparent", border:'none' }} className='mobile-bar d-lg-none' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <span  style={{ color:"#FFF", fontSize:"20px" }}><FaBarsStaggered /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto  mb-lg-0">
                        <li className="nav-item parent_item">
                        <a className="nav-link" aria-current="page" href="#">Products <span><IoIosArrowDown /></span> </a>

                           <ul className='sub_menu'>
                              <li><a href="">Seating</a></li>
                              <li><a href="">Desks</a></li>
                              <li><a href="">DIY</a></li>
                              <li><a href="">Storage</a></li>
                           </ul>

                        </li>
                        <li className="nav-item">
                        <Link to="/about" className="nav-link" href="#">About</Link>
                        </li>
                        
                        <li className="nav-item">
                        <a className="nav-link" href="#"> Our Story</a>
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



      

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    ...
                </div>
            </div>

            
        </>
    );
};

export default Navbar;