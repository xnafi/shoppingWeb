import React from "react";
import { NavLink } from "react-router-dom";

function HomeComponent2() {
    return (
        <>
            <div className="HomeComponent">
                <div className="row">
                    <div className="col-12 p-5 col-lg-6 component-home1" data-aos="zoom-out-right" data-aos-duration="3000">
                        <h3>Comfort Comes in Many Styles</h3>
                        <h1 className="mt-lg-4">OUR DENIM WILL MAKE WORKING FROM WORK FEEL JUST LIKE WORKING FROM HOME.</h1>
                        <h4 className="mt-lg-4">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</h4>
                        <NavLink to="/discover" type="button" className="btn mt-5 button btn-primary btn-lg ">SHOP ALL APO</NavLink>
                    </div>
                    <div className="col-12 col-lg-6 component-home2" data-aos="zoom-out-down" data-aos-duration="3000">
                        <img src="https://images.unsplash.com/photo-1587568763847-9f1ca55775cf?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8NDU4NTAwMXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" className="component-img" alt="" />
                    </div>
                </div>
            </div>


        </>
    )

}

export default HomeComponent2;