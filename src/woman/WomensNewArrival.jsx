import React, { useState } from "react"

import WomenNewArrivalProduct from "./WomenNewArrivalProduct";
import WomenSingle from "./WomanSingle";
import Collection from "./Collection";





function WomensNewArrival() {
    const [item, set] = useState(WomenNewArrivalProduct);
    return (

        <>

            <div className="container">
                <div className="div1">
                    <h3>Filter By</h3>
                    <select className="sort">
                        <option selected>Sort by</option>
                        <option value="1">A TO Z</option>
                        <option value="2"> LOW TO HIGH</option>
                        <option value="3">HIGH TO LOW</option>
                        <option value="3">NEWEST</option>
                        <option value="3">Three</option>
                    </select>
                </div>



                {/* another section */}









            </div>



            <div className="container-fluid">
            <div className="row">
                <Collection/>
                {
                    item.map((current) => {
                        return <WomenSingle
                            key={current.id} {...current} />
                    })
                }

            </div>
            </div>
           




        </>
    )

}

export default WomensNewArrival;



