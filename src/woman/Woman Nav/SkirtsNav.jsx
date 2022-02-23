import React, { useState } from "react"
import SkirtProducts from "../Skirts/SkirtProducts";
import SkirtSingle from "../Skirts/SkirtSingle";
import Collection from "../Collection"








function Skirt() {
    const [item, set] = useState(SkirtProducts);
    return (

        <>
            <div className=" container-fluid accessories_heading mb-3">
                <div className="row divh1">
                    <div className="col-lg-10 m-auto">
                        <h1 className="fs-1">SKIRTS</h1>
                    </div>
                </div>
            </div>



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
                    <Collection />
                    {
                        item.map((current) => {
                            return <SkirtSingle
                                key={current.id} {...current} />
                        })
                    }

                </div>
            </div>





        </>
    )

}

export default Skirt;



