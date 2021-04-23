import React, {useEffect, useState} from "react";

export const WithFetchingData = WrappedComponent =>props =>{




 let   resultTrying = 1

    return <WrappedComponent {...props} result = {resultTrying}/>
}
