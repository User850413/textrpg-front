import React, { useState } from 'react';
import { useConn } from '../../hooks/useConn';
import type { Hero } from '../../types/heroes';
import { Link } from 'react-router-dom';

/**
 *  file : CharacterSelect.tsx
 *  page : 캐릭터 선택 페이지
 *  updated at : 2026-01-16
 */
const CharacterSelect = () => {
    const [charList, setCharList] = useState<Hero[]>([]);

    // 캐릭터 리스트 가져오기
    const getCharacters = async () => {
    const { connect } = useConn();
        try{
            const response = await connect.client.get("/api/hero/byUser");
            console.log(response);
        }catch(error){
            console.error(error);
        }

    }

    return (
        <div>
            <h1>리스트</h1>

            <Link to="/characters/create">생성</Link>
        </div>
    );
};

export default CharacterSelect;