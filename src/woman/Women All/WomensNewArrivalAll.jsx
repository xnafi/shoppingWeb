import React, { useState } from "react"
import WomenNewArrivalProduct from "../WomenNewArrivalProduct";
import WomenSingle from "../WomanSingle";






function WomensNewArrivalAll() {
    const [item, set] = useState(WomenNewArrivalProduct);
    return (

        <>


            <div className="container-fluid">
            <div className="row">

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



