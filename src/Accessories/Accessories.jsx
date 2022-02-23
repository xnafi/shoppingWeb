import React, { useState } from "react";
import AccessoriesProducts from "./AccessoriesProducts";
import AccessoriesSingle from "./AccessoriesSingle";
import Search from "../Search/Search";

function Accessories() {
    const [item, set] = useState(AccessoriesProducts)
    return (
        <>

            <div className=" container-fluid accessories_heading">
                <div className="row divh1">
                    <div className="col-lg-10 m-auto">
                        <h1 className="fs-1">ACCESSORIES</h1>
                    </div>
                </div>
            </div>

            <Search/>



            <div className="container-fluid">
                <div className="row mt-lg-3">
                    
                    {
                        item.map((current) => {
                            return <AccessoriesSingle
                                key={current.id} {...current} />
                        })
                    }

                </div>
            </div>




        </>
    )

}

export default Accessories;