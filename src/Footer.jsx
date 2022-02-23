import React from "react";
import { NavLink } from "react-router-dom";




function Footer() {
    return (
        <>
            <div className="container my-5 mt-5">
                <div className="row gy-3">
                    <div className=" col-lg-3">
                        <div className="card" style={{ border: 'none' }}>
                            <h5 className="text-center"> HEADQUATER</h5>
                            <br />
                            <p className="text-center"> 500 Terry Francois Street

                                San Francisco, CA 94158</p>
                            <a style={{ textDecoration: "none", color: 'GrayText' }} href="mailto:fk.nafi@gmail.com"> fk.nafi@gmail.com</a>
                            <a style={{ textDecoration: "none", color: 'GrayText' }} href="tel:+8801762057784">+8801762057784</a>
                        </div>
                    </div>


                    <div className=" col-lg-3">
                        <div className="card" style={{ border: 'none' }}>
                            <h5 className="text-center"> MENU</h5>
                            <br />
                            <NavLink className="footer_nav" to="/discover">Shop All</NavLink>
                            <NavLink className="footer_nav" to="/women">Women</NavLink>
                            <NavLink className="footer_nav" to="/man">Men</NavLink>
                            <NavLink className="footer_nav" to="/accessories">Accessories</NavLink>
                            <NavLink className="footer_nav" to="/discover">Discover</NavLink>
                        </div>
                    </div>


                    <div className=" col-lg-3">
                        <div className="card" style={{ border: 'none' }}>
                            <h5 className="text-center"> POLICY</h5>
                            <br />

                            <NavLink className="footer_nav" to="/shopall">Shipping And Return</NavLink>
                            <NavLink className="footer_nav" to="/storepolicy">Store Policy</NavLink>
                            <NavLink className="footer_nav" to="/paymentmethod">Payment Methods </NavLink>
                            <NavLink className="footer_nav" to="/faq">FAQ</NavLink>
                            <NavLink className="footer_nav" to="/contact">Contact</NavLink>

                        </div>

                    </div>

                    <div className=" col-lg-3">
                        <div className="card" style={{ border: 'none' }}>
                            <h5 className="text-center"> SOCIAL</h5>
                            <br />
                            <a style={{ textDecoration: "none", color: 'GrayText' }} href="http://www.facebook.com/fk.nafi">FaceBook</a>
                            <a style={{ textDecoration: "none", color: 'GrayText' }} href="http://www.instagram.com/x_nafi">InstaGram</a>
                            <a style={{ textDecoration: "none", color: 'GrayText' }} href="http://www.wechat.com/forhad117">WeChat</a>
                            <a style={{ textDecoration: "none", color: 'GrayText' }} href="http://www.youtube.com/fk.nafi11">YouTube</a>


                        </div>
                        </div>
                </div>
            </div>

            <div className="footer_payment">
                <div className="row">
                    <div className="col-12 col-lg-6 payment_text">
                        <h4 className="p-2"> WE ACCEPT THE FOLLOWING PAYMENT METHODS</h4>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                          <img className="p-3" src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="" />
                          <img className="p-3" src="https://cdn-icons-png.flaticon.com/128/196/196566.png" alt="" />
                          <img className="p-3" src="https://cdn-icons-png.flaticon.com/128/196/196545.png" alt="" />
                          <img className="p-3" src="https://cdn-icons-png.flaticon.com/128/196/196581.png" alt="" />
                          <img className="p-3" src="https://cdn-icons-png.flaticon.com/128/196/196544.png" alt="" />
                    </div>
                </div>
            </div>

        </>

    )

}

export default Footer;