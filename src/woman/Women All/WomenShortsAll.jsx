import React, { useState } from "react"


import WomenShortsProducts from "../Women Shorts/WomenShortsProducts";
import WomenShortsSingle from "../Women Shorts/WomenShortsSingle";




function WomenShortsAll() {
    const [item, set] = useState(WomenShortsProducts);
    return (

        <>
            <div className="container-fluid">
            <div className="row">
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



