import React, { useState } from "react"


import WomenJacketsProducts from "../Women Jackets/WomenJacketsProducts";
import WomenJacketsSingle from "../Women Jackets/WomenJacketsSingle";
import Collection from "../Collection";






function WomenJacketsAll() {
    const [item, set] = useState(WomenJacketsProducts);
    return (

        <>
            <div className=" container-fluid accessories_heading mb-3">
                <div className="row divh1">
                    <div className="col-lg-10 m-auto">
                        <h1 className="fs-1">WOMEN'S JACKETS</h1>
                    </div>
                </div>
            </div>




            <div className="container-fluid">
                <div className="row">
                    <Collection />
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



