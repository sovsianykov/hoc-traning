import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchCountry } from "../redux/actions";
import {useSelector} from "react-redux";


function Homepage({result}) {
    const dispatch = useDispatch()
     useEffect(() => {
         dispatch(fetchCountry())
     },[dispatch])
     const state = useSelector(state => state.fetch.countries)
    console.log(state)


    return (
        <div className="home">

           <p>Home inside</p>
             <p>{result}</p>
        </div>
    );
}

export default Homepage;
