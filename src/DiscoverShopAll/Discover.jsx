import React from "react";
import { NavLink } from "react-router-dom";
import WomenAll from "../DiscoverShopAll/WomenAll "
import Search from "../Search/Search";


function Discover() {
    return (
        <>
            <div className="container-fluid">
                <Search/>
                <div className="row">
                    <div className="disdiv1 col-12 col-lg-4">
                        <h1>THE DENI WAY</h1>
                        <p>you can use this as
                            what you want or blog section </p>

                    </div>
                    <div className="disdiv2 col-12 col-lg-8">
                        <img className="disimg" src="https://static.wixstatic.com/media/c837a6_21c76a11e61241789cef03768385eadf~mv2.jpg/v1/fill/w_803,h_500,al_c,q_85,usm_0.66_1.00_0.01/c837a6_21c76a11e61241789cef03768385eadf~mv2.webp" alt="" />

                    </div>
                </div>
            </div>




             <WomenAll/>
             



        </>
    )

}

export default Discover;