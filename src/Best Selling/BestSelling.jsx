
import React from "react";
import Product1 from "../Best Selling/SinglePoduct";
import Products from "../Best Selling/Products"
import { useState } from "react";



function BestSelling() {
    const [item, set] = useState(Products);
    return (
        <>
            <div className="container-fluid bestselling-main">
                <h1 className="m-3 p-3">BEST SELLING APO PRODUCTS</h1>
                <div className="row gy-3" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    {
                        item.map((current) => {
                            return <Product1
                                key={current.id} {...current} />
                        })
                    }
                </div>
            </div>

        </>
    )

}

export default BestSelling;