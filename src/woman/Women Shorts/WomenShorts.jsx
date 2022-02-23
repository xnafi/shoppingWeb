import React, { useState } from "react"


import Collection from "./Collection";
import WomenShortsProducts from "./WomenShortsProducts";
import WomenShortsSingle from "./WomenShortsSingle";





function WomenShorts() {
    const [item, set] = useState(WomenShortsProducts);
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
                        return <WomenShortsSingle
                            key={current.id} {...current} />
                    })
                }

            </div>
            </div>
           




        </>
    )

}

export default WomenShorts;



