import {FETCH_COUNTRIES} from "./types";


export   function fetchCountry() {

    return async  dispatch  => {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
            .then(data =>data.json())
        dispatch({type: FETCH_COUNTRIES, payload : response})
        console.log(response)
     }
 }