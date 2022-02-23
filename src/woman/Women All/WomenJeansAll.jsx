import React, { useState } from "react"

import WomenJeansProducts from "../Women Jeans/WomenJeansProducts";
import WomenJeansSingle from "../Women Jeans/WomenJeansSingle";





function WomenJeansAll() {
    const [item, set] = useState(WomenJeansProducts);
    return (

        <>


            <div className="container-fluid">
            <div className="row">
            
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



