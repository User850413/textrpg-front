import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    
    return (
        <CharacterContext.Provider value={{ character, setCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
};