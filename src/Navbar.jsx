import React from "react";
import { Link, NavLink } from "react-router-dom";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import img1 from './images/1.jpg'
import './App.css';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import AddLocationTwoToneIcon from '@mui/icons-material/AddLocationTwoTone';
import Location from "./Location";


function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg fw-bolder navbar-light bg-light navhead">
                <div className="container-fluid navhead">
                    <Link className="nav-link active " id="navhome" aria-current="page" to="/" ><img src={img1} className="img1" alt="headimg" /> Home</Link>







                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
                        <ul className="navbar-nav">


                            <li className="nav-item dropdown1 alas1">
                                <NavLink  className="nav-link " to="/women"  id="navbarDropdownMenuLink" role="button" aria-expanded="false">
                                    Women
                                </NavLink >
                                 
                                 <ul className="dropdown-menu alas2 text-lg-center" aria-labelledby="navbarDropdownMenuLink">
                                   <li> <NavLink   className="dropdown-item" to="/womenallnav">Women All Proudcts</NavLink > </li> 
                                   <li> <NavLink   className="dropdown-item" to="/womennewarrivalnav">Women's New Arriaval</NavLink > </li> 
                                    <li><NavLink  className="dropdown-item" to="womenbestsellingnav">Women's Best Selling</NavLink ></li>
                                    <li><NavLink  className="dropdown-item" to="womenjeansnav">Women's Jeans</NavLink ></li>
                                    <li><NavLink  className="dropdown-item" to="womenshortsnav">Women's Shorts</NavLink ></li>
                                    <li><NavLink  className="dropdown-item" to="womenjacketsnav">Women's Jackets</NavLink ></li>
                                    <li><NavLink  className="dropdown-item" to="skirtsnav">Skirts</NavLink ></li>
                                </ul>
                                 
                            </li>


                            <li className="nav-item dropdown1">
                                <NavLink  className="nav-link dropdown-toggl" to="man" id="navbarDropdownMenuLink" role="button" aria-expanded="false">
                                    Man
                                </NavLink >
                                <ul className="dropdown-menu text-lg-center" aria-labelledby="navbarDropdownMenuLink">
                            

                                    <li><NavLink  className="dropdown-item" to="/manallnav">Man's All Products</NavLink ></li>
                                    <li><NavLink  className="dropdown-item" to="/mannewarrivalnav">Man's New Arriaval</NavLink ></li>
                                    <li><NavLink  className="dropdown-item" to="/manbestsellingnav">Man's Best Selling</NavLink ></li>
                                    <li><NavLink  className="dropdown-item" to="/manjeansnav">Man's Jeans</NavLink ></li>
                                    <li><NavLink  className="dropdown-item" to="/manjacketnav">Man's Jackets</NavLink ></li>
                                    <li><NavLink  className="dropdown-item" to="/manshortsnav">Man's Shorts</NavLink ></li>

                                </ul>
                            </li>


                            <li className="nav-item">
                                <NavLink  className="nav-link" to="/accessories">Accessories</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link" to="/discover">Discover</NavLink >
                            </li>






                        </ul>

                    </div>


                </div>
            </nav>
            <div className="lastnav d-flex  justify-content-between">

                <NavLink className="nav-link active justify-content-start mt-2 btn btn-outline-light  fw-bolder  fs-4"to="/login" id="navhome2" aria-current="page" > <IconButton className="" aria-label="fingerprint" color="success">
                    <Fingerprint />
                </IconButton> Login</NavLink>
                
               <Location/>

                
            </div>







        </>
    )

}

export default Navbar;