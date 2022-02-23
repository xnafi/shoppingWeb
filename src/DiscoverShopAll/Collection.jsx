import { NavLink } from "react-router-dom";


function Collection() {
    return (
        <>

            <div className=" container-fluid accessories_heading mb-3">
                <div className="row divh1">
                    <div className="col-lg-10 m-auto">
                        <h1 className="fs-1">MAN'S AND WOMEN'S ALL PRODUCTS</h1>
                    </div>
                </div>
            </div>


            <div className="container mt-5">

                <div className="div1">
                    <h3>Filter By</h3>
                    <select className="sort">
                        <option selected>Sort by</option>
                        <option value="1">A TO Z</option>
                        <option value="2"> LOW TO HIGH</option>
                        <option value="3">HIGH TO LOW</option>
                        <option value="3">NEWEST</option>
                        <option value="3">Three</option>
                    </select>
                </div>

            </div>

            <div class="col-12 collection mt-lg-2 col-lg-2">

                <hr />

                <p>
                    <h2 class=" text-center fw-bolder btn-lg ml-lg-4 dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        Collection
                    </h2>
                </p>
                <div >
                    <div class="collapse collapse-horizontal" id="collapseWidthExample">

                        <NavLink className="dropdown-item fw-bolder" to="/allwomenproducts">ALL WOMEN'S PRODUTS</NavLink >
                        <NavLink className="dropdown-item fw-bolder" to="/allmenproducts">ALL MAN'S PRODUTS</NavLink >



                    </div>
                </div>


                <hr />

            </div>

        </>
    )

}
export default Collection;