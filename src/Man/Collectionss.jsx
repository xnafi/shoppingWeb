import { NavLink } from "react-router-dom";


function Collectionss() {
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

                        <NavLink className="dropdown-item fw-bolder" to="/man">All</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/mannewarrival">Man's New Arriaval</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/manbestselling">Man's Best Selling</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/manjeans">Man's Jeans</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/manjackets">Man's Jackets</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/manshorts">Man's Shorts</NavLink >


                    </div>
                </div>


                <hr />

            </div>
        </>
    )

}
export default Collectionss;