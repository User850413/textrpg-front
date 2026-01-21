import React from 'react';
import type { HeroDetailResponse } from '../types/heroes';
import { useConn } from '../hooks/useConn';
import type { getItem } from '../types/heroItem';
import type { BackpackResponse } from '../types/backpacks';

/**
 *  file : CharacterProvider.tsx
 *  page : 캐릭터 정보 컨텍스트
 *  updated at : 2026-01-16
 */

interface CharacterProviderType {
    character: HeroDetailResponse | null;
    setCharacter: React.Dispatch<React.SetStateAction<HeroDetailResponse | null>>;
    addMaterialItem: (itemId: string, count: number) => Promise<void>;
}

export const CharacterContext = React.createContext<CharacterProviderType | null>(null);

export const CharacterProvider = ({children}: {children: React.ReactNode}) => {
    const {connect} = useConn();
    const [character, setCharacter] = React.useState<HeroDetailResponse | null>(null);

    // item 획득
    const addItem = async (itemId:string, count:number) => {
        if(!character || character == null || character == undefined) return;

        const param = {
            heroId: character?.id,
            itemId,
            count
        }

        try{
            const response = await connect.client.post("/api/heroItem/getItem", param);
            if(response.data.result === "SUCCESS"){
                const {data}: {data: getItem} = response.data;
                const newBackpack: BackpackResponse = {...character.backpack, currentCarriage:data.currentCarriage};

                setCharacter(prev => {
                    if(!prev) return prev;
                    else return {...prev, backpack:newBackpack}
                });
            }
        }catch(error){
            console.error(error);
        }
    }

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
        <CharacterContext.Provider value={{ character, setCharacter, addMaterialItem: addItem }}>
            {children}
        </CharacterContext.Provider>
    );
};