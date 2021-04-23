import React, {useEffect, useState} from "react";
import './App.css';
import { WithFetchingData } from "./hoc/WithFetchingData";
import Homepage from "./pages/Homepage";
function App() {


const EnhancedHome = WithFetchingData(Homepage)

  return (
    <div className="App">
      <EnhancedHome/>


    </div>
  );
}

export default App;
