import React, {useEffect, useState} from "react";
import './App.css';
import { WithHoc } from "./hoc/WithHoc";
import Homepage from "./pages/Homepage";
import {useDispatch} from "react-redux";
import { fetchCountry } from "./redux/actions";
function App() {


const EnhancedHome = WithHoc(Homepage)
 const dispatch = useDispatch()
  return (
    <div className="App">
      <EnhancedHome onClick = {dispatch(fetchCountry())}  />
    </div>
  );
}

export default App;
