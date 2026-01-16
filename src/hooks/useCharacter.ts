import React from "react";
import { CharacterContext } from "../context/CharacterProvider"

export const useCharacter = () => {
    const context = React.useContext(CharacterContext);
    if(!context){
        throw new Error("useCharacter must be within CharacterProvider");
    }

    return context;
}