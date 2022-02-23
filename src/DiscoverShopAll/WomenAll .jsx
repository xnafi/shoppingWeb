import React from "react";
import Collection from "../DiscoverShopAll/Collection";
import WomenAllProducts from "../DiscoverShopAll/WomenAllProducts"
import WomenAllSingle from "../woman/Women All/WomenAllSingle";

import { useState } from "react";



function WomenAll() {

    const [item, set] = useState(WomenAllProducts);
    return (

        <>

            <div className="container-fluid">
            <div className="row">
                <Collection/>
                {
                    item.map((current) => {
                        return <WomenAllSingle
                            key={current.id} {...current} />
                    })
                }

            </div>
            </div>
           




        </>
    )

}

export default WomenAll;