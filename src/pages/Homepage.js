import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCountry } from "../redux/actions";


function Homepage({result}) {
    const dispatch = useDispatch()
     useEffect(() => {
         dispatch(fetchCountry())
     },[dispatch])



    return (
        <div className="home">

           <h1>Home inside</h1>
             <p>{result}</p>
        </div>
    );
}

export default Homepage;
