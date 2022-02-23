import React, { useState } from "react"
import Collection from "../Collection";


import WomenShortsProducts from "../Women Shorts/WomenShortsProducts";
import WomenShortsSingle from "../Women Shorts/WomenShortsSingle";





function WomenShortsAll() {
    const [item, set] = useState(WomenShortsProducts);
    return (

        <>
            <div className=" container-fluid accessories_heading mb-3">
                <div className="row divh1">
                    <div className="col-lg-10 m-auto">
                        <h1 className="fs-1">WOMEN'S BEST SELLING</h1>
                    </div>
                </div>
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

export default WomenShortsAll;



