import React, { useState } from "react"
import ManNewArrivalProducts from "./ManNewArrivalProducts";
import ManNewArrivalSingle from "./ManNewArrivalSingle";

import Collectionss from "../Collectionss";







function ManNewArrival() {
    const [item, set] = useState(ManNewArrivalProducts);
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
                <Collectionss/>
                {
                    item.map((current) => {
                        return <ManNewArrivalSingle 
                            key={current.id} {...current} />
                    })
                }

            </div>
            </div>
           




        </>
    )

}

export default ManNewArrival;



