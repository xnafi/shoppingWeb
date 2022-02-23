import React, { useState } from "react"


import WomenJacketsProducts from "../Women Jackets/WomenJacketsProducts";
import WomenJacketsSingle from "../Women Jackets/WomenJacketsSingle";






function WomenJacketsAll() {
    const [item, set] = useState(WomenJacketsProducts);
    return (

        <>




            <div className="container-fluid">
            <div className="row">
                {
                    item.map((current) => {
                        return <WomenJacketsSingle
                            key={current.id} {...current} />
                    })
                }

            </div>
            </div>
           




        </>
    )

}

export default WomenJacketsAll;



