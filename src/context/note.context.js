import React, { createContext } from "react";

export const noteContext = createContext();

const noteState = (props) =>{

    const state = {
        "name" : "Saveen",
        "class": "SS2"
    }
    return(
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    )
}
