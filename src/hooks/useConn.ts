import React from "react"
import { ConnContext } from "../context/ConnProvider"

export const useConn = () => {
    const context = React.useContext(ConnContext);
    if(!context) {
        throw new Error("useConn must be used within ConnProvider");
    }

    return context;
}