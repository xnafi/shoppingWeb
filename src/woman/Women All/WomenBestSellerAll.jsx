import React, { useState } from "react"

import WomenBestSellerProducts from "../Women Best Seller/WomenBestSellerProducts";
import WomenBestSingle from "../Women Best Seller/WomenBestSingle";





function WomenBestSellerAll() {
    const [item, set] = useState(WomenBestSellerProducts);
    return (

        <>



            <div className="container-fluid">
            <div className="row">
                
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



