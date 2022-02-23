import React from "react";
import { NavLink } from "react-router-dom";

    

    function ManNewArrivalSingle ({ imgg, title, price }) {

        return (
            <>








                <div className="col-6 col-sm-2 gy-lg-4 gy-3 ">
                    <div className="card">
                        <img src={imgg} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-text">{title}</h6>
                            <h3>{price}</h3>
                            <NavLink to="/"><button>BUY NOW</button></NavLink>
                        </div>
                    </div>
                </div>











            </>





        )
    }
    
    




export default ManNewArrivalSingle;