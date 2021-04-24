import React, {useEffect} from "react";
import {Button} from "@material-ui/core";
import Navbar from "../componens/Navbar";


export const WithHoc = WrappedComponent => props =>{





    return (
        <div>
             <Navbar  />
             <WrappedComponent {...props} />
        </div>
    )
}
