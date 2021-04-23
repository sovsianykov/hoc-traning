import { FETCH_CAPITAL, FETCH_COUNTRIES, FETCH_CURRENCY, FETCH_REGION_BLOCKS } from "./types";


const INITIAL_STATE = {
    countries : [],
    currency : [],
    languages : [],
    regionBlocks : [],
    capital : []
}
 const countryReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CAPITAL :
            return {...state, capital : action.payload}
        case FETCH_COUNTRIES :
            return {...state, countries : action.payload}
        case FETCH_CURRENCY :
            return {...state, currency : action.payload}
        case FETCH_REGION_BLOCKS :
            return {...state, regionBlocks : action.payload}
        default :
            return state

    }
}
export default countryReducer