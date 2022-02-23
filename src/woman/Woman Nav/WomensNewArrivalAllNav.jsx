import React, { useState } from "react"
import WomenNewArrivalProduct from "../WomenNewArrivalProduct";
import WomenSingle from "../WomanSingle";
import Collection from "../Collection";







function WomensNewArrivalAll() {
    const [item, set] = useState(WomenNewArrivalProduct);
    return (

        <>

            <div className=" container-fluid accessories_heading mb-3">
                <div className="row divh1">
                    <div className="col-lg-10 m-auto">
                        <h1 className="fs-1">WOMEN'S NEW ARRIVAL</h1>
                    </div>
                </div>
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

export default WomensNewArrivalAll;



