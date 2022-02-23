

import React from "react";
import { useState } from "react";
import AddLocationTwoToneIcon from '@mui/icons-material/AddLocationTwoTone';
import { Link } from "react-router-dom";


const Location = () => {
    const [details, setDetails] = useState(null);

    const toGetUserLocation = () => {
        fetch("http://api.ipstack.com/103.146.3.50?access_key=c980debe36d316cee25953755626beed&format=1")
            .then(response => response.json())
            .then(data => setDetails(data))

    }

    return (
        <>
            <a className="btn btn-light" onClick={toGetUserLocation}>
                <h5  id="navhome2">Click For</h5>     <AddLocationTwoToneIcon/> {details && <h5  id="navhome2" > {`${details.country_name} , ${details.city}`} </h5>}
            </a>


        </>
    )



}


export default Location;
