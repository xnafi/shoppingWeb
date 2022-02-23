import React, { useState } from "react"
import Collection from "../Collection";

import WomenJeansProducts from "../Women Jeans/WomenJeansProducts";
import WomenJeansSingle from "../Women Jeans/WomenJeansSingle";






function WomenJeansAll() {
    const [item, set] = useState(WomenJeansProducts);
    return (

        <>

            <div className=" container-fluid accessories_heading mb-3">
                <div className="row divh1">
                    <div className="col-lg-10 m-auto">
                        <h1 className="fs-1">WOMEN'S JEANS</h1>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row">
                     <Collection/>
                    {
                        item.map((current) => {
                            return <WomenJeansSingle
                                key={current.id} {...current} />
                        })
                    }

                </div>
            </div>





        </>
    )

}

export default WomenJeansAll;



