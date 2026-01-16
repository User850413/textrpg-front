import React from 'react';
import type { Hero } from '../types/heroes';

/**
 *  file : CharacterProvider.tsx
 *  page : 캐릭터 정보 컨텍스트
 *  updated at : 2026-01-16
 */

interface CharacterProviderType {
    character: Hero | null;
    setCharacter: React.Dispatch<React.SetStateAction<Hero | null>>;
}

export const CharacterContext = React.createContext<CharacterProviderType | null>(null);

export const CharacterProvider = ({children}: {children: React.ReactNode}) => {
    const [character, setCharacter] = React.useState<Hero | null>(null);

    React.useEffect(() => {
        // localStorage 확인
        const selectedCharStr = localStorage.getItem("selectedChar");
        let selectedChar
        if(selectedCharStr){
            selectedChar = JSON.parse(selectedCharStr);
            setCharacter(selectedChar);
        }
    }, [])
    
    return (
        <CharacterContext.Provider value={{ character, setCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
};