import React from "react";
import { NavLink } from "react-router-dom";



function Product1({img , title , price}) {

    return (
        <>
            <div className="col-6 col-sm-2 ">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-text">{title}</h5>
                        <h3>{price}</h3>
                        <NavLink to="/"><button>BUY NOW</button></NavLink>
                    </div>
                </div>
            </div>
            </>
            

)}

            export default Product1;




