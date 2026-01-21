import React from 'react';
import type { HeroDetailResponse } from '../types/heroes';
import { useConn } from '../hooks/useConn';
import type { getItem } from '../types/heroItem';
import type { BackpackResponse } from '../types/backpacks';
import type { Items } from '../types/items';

/**
 *  file : CharacterProvider.tsx
 *  page : 캐릭터 정보 컨텍스트
 *  updated at : 2026-01-16
 */

interface CharacterProviderType {
    character: HeroDetailResponse | null;
    setCharacter: React.Dispatch<React.SetStateAction<HeroDetailResponse | null>>;
    addItem: (itemId: string, count: number) => Promise<void>;
    items: Items[] | null;
}

export const CharacterContext = React.createContext<CharacterProviderType | null>(null);

export const CharacterProvider = ({children}: {children: React.ReactNode}) => {
    const {connect} = useConn();
    const [character, setCharacter] = React.useState<HeroDetailResponse | null>(null);
    const [items, setItems] = React.useState<Items[] | null>(null);

    // item 목록 가져오기
    const getItemsData = async (heroId:string) => {
        if(!heroId) return;

        try{
            const response = await connect.client.get(`/api/heroItem/${heroId}`);
            if(response.data?.result === "SUCCESS"){
                const {data} = response.data;
                setItems(data);
            }

        }catch(error){
            console.error(error);
        }
    }

    // item 획득
    const addItem = async (itemId:string, count:number) => {
        if(!character || character == null || character == undefined) return;
        if(character.backpack.maxCarriage <= character.backpack.currentCarriage) {
            console.error("가방이 가득 찼습니다!");
            return;
        }
        const heroId = character.id;
        const param = {
            heroId,
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
                getItemsData(heroId);
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
            if(selectedChar){
                setCharacter(selectedChar);
                getItemsData(selectedChar.id);
            }
        }
    }, [])
    
    return (
        <CharacterContext.Provider value={{ character, setCharacter, addItem, items }}>
            {children}
        </CharacterContext.Provider>
    );
};