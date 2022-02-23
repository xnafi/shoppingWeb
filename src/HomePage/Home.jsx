import React from "react";
import "../App.css"

import { Link, NavLink } from "react-router-dom";
import BestSelling from "../Best Selling/BestSelling";
import HomeComponent2 from "./HomeComponent2";




function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center " id="homemain">
                    <div className="col-12 col-lg-6 mt-3 justify-content-lg-center"
                        data-aos="fade-right"
                        data-aos-offset="410"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000">
                        <div className="offer" >
                            <h4>25% OFF WOMENS JEANS - USE CODE: BTTRDAYS</h4>
                        </div>
                        <img className="homeimg" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3MlMjBtb2RlbCUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="shopping women" />
                    </div>

                    <div className="col-12 mt-3 col-lg-6 d-flex justify-content-end"
                        data-aos="fade-left"
                        data-aos-offset="410"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000">
                        <div className="search">

                        </div>
                        <img className="homeimg" src="https://images.unsplash.com/photo-1521165946603-4019d13d7d46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="male fasion" />

                    </div>
                </div>



            </div>
            <div className="container msg rounded-3"  data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" 
                    data-aos-offset="100"
                    data-aos-duration="1000">
                <div className="row  justify-content-center" >
                    <div className="col-lg-2 col-auto">
                        <NavLink to="/women" className="btn btn-primary btn-lg btnsm m-4">Shop Woman</NavLink >
                    </div>
                    <div className="col-md-auto col-lg-8 text-center mt-3 col-auto">
                        <h1 className="msgh1">GOODBYE SWEATS, HELLO DENIM</h1>
                        <h4 className="msgh3">Better days are coming, take them on in style. </h4>
                    </div>
                    <div className="col-lg-2 col-auto">
                        <NavLink to="man" className="btn btn-primary btn-lg btnsm m-4" role="button">Shop Man</NavLink >
                    </div>
                </div>
            </div>

            <BestSelling />
            <HomeComponent2 />


        </>

    )

}

export default Home;