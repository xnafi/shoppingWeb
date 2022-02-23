import React, { useState } from "react"

import SkirtProducts from "../Skirts/SkirtProducts";
import SkirtSingle from "../Skirts/SkirtSingle";






function Skirt1() {
    const [item, set] = useState(SkirtProducts);
    return (

        <>




            <div className="container-fluid">
            <div className="row">
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

export default Skirt1;



