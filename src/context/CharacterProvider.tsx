import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Hero } from '../types/heroes';

/**
 *  file : CharacterSelect.tsx
 *  page : 캐릭터 선택 페이지
 *  updated at : 2026-01-16
 *  description : 캐릭터가 선택되었는지 확인 => 아닐 시 선택 창으로 리다이렉션
 */

interface CharacterProviderType {
    character: Hero | null;
    setCharacter: React.Dispatch<React.SetStateAction<Hero | null>>;
}

export const CharacterContext = React.createContext<CharacterProviderType | null>(null);

export const CharacterProvider = ({children}: {children: React.ReactNode}) => {
    const [character, setCharacter] = React.useState<Hero | null>(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        if(character == null){
            navigate("/characters/select");
        }
    }, []);

    return (
        <CharacterContext.Provider value={{ character, setCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
};