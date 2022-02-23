import React, { useState } from "react"
import Collection from "../Collection";

import WomenBestSellerProducts from "../Women Best Seller/WomenBestSellerProducts";
import WomenBestSingle from "../Women Best Seller/WomenBestSingle";






function WomenBestSellerAll() {
    const [item, set] = useState(WomenBestSellerProducts);
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
                            return <WomenBestSingle
                                key={current.id} {...current} />
                        })
                    }

                </div>
            </div>





        </>
    )

}

export default WomenBestSellerAll;



