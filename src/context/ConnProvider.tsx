import React from "react"
import Connect from "../Communicator/Communicator";

interface ConnContextType {
    connect: Connect;
}

export const ConnContext = React.createContext<ConnContextType | null>(null);

export const ConnProvider = ({children}: {children: React.ReactNode}) => {
    const connect = new Connect();

    return(
        <ConnContext.Provider value={{connect}}>
            {children}
        </ConnContext.Provider>
    )
}