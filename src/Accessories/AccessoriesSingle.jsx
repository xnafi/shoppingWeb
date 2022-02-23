import React from "react";
import { NavLink } from "react-router-dom";

    

    function AccessoriesSingle ({ imgg, title, price }) {

        return (
            <>








                <div class="col-6 col-sm-2 gy-lg-4 gy-3 ">
                    <div class="card">
                        <img src={imgg} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h6 class="card-text">{title}</h6>
                            <h3>{price}</h3>
                            <NavLink to="/"><button>BUY NOW</button></NavLink>
                        </div>
                    </div>
                </div>











            </>





        )
    }
    
    




export default AccessoriesSingle;