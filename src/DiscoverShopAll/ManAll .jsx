import React from "react";
import { useState } from "react";
import ManAllProducts from "../Man/Man All/ManAllProducts";
import ManAllSingle from "../Man/Man All/ManAllSingle";
import Collection from "../DiscoverShopAll/Collection";
import Collectionss from "../Man/Collectionss";



function ManAll() {

    const [item, set] = useState(ManAllProducts);
    return (

        <>

            <div className="container-fluid">
            <div className="row">
                <Collection/>
                {
                    item.map((current) => {
                        return <ManAllSingle
                            key={current.id} {...current} />
                    })
                }

            </div>
            </div>
           




        </>
    )

}

export default ManAll;