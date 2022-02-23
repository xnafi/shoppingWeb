import { NavLink } from "react-router-dom";


function Collection() {
    return (
        <>
            <div className="col-12 collection mt-lg-2 col-lg-2">




                <hr />

                <p>
                    <h2 className=" text-center fw-bolder btn-lg ml-lg-4 dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        Collection
                    </h2>
                </p>
                <div >
                    <div className="collapse collapse-horizontal" id="collapseWidthExample">

                        <NavLink className="dropdown-item fw-bolder" to="/womenall">All</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/womennewarrival">Women's New Arriaval</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/womenbestseller">Women's Best Seller</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/womenjeans">Women's Jeans</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/womenshort">Women's Shorts</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/womenjackets">Women's Jackets</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/skirts">Skirts</NavLink >


                    </div>
                </div>


                <hr />

            </div>
        </>
    )

}
export default Collection;