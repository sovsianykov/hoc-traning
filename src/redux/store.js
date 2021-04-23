import { applyMiddleware, createStore, combineReducers, compose   } from "redux";
import thunk from "redux-thunk";

import countryReducer from "./countryReducer";

const  reducer = combineReducers({
    fetch : countryReducer
})


const store = createStore( reducer, compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store