import React from "react";
import WomensNewArrivalAll from "./WomensNewArrivalAll";
import WomenBestSellerAll from "./WomenBestSellerAll";
import WomenJeansAll from "./WomenJeansAll";
import WomenJacketsAll from "./WomenJacketsAll";
import WomenShortsAll from "./WomenShortsAll";
import Skirt1 from "./Skirts1";
import Collection from "../Collection";
import WomenAll from "./WomenAll ";






function Women() {

    return (
        <>
            <div className="container-fluid women-mein">
                <div className="row align-items-center mt-5">
                    <div className="col-auto col-lg-4 women-home-text">
                        <h1 >SHOP WOMEN</h1>
                        <br />
                        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                    <div className="col-auto col-lg-auto img-div1">
                        <img className="whome-img1" src="https://images.unsplash.com/photo-1577909711428-88e274c20015?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NzN8NjMxNDE1MzR8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                    </div>
                    <div className="col-auto col-lg-auto mb-3 img-">
                        <img className="whome-img2" src="https://images.unsplash.com/photo-1454720503269-3a35c21bebc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGplYW5zJTIwd2l0aCUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                    </div>
                </div>


            </div>

          

           
            <WomenAll/>







        </>

    )

}

export default Women;