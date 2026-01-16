import React from 'react';
import { useConn } from '../../hooks/useConn';
import type { Hero } from '../../types/heroes';
import { Link } from 'react-router-dom';

/**
 *  file : CharacterSelect.tsx
 *  page : 캐릭터 선택 페이지
 *  updated at : 2026-01-16
 */
const CharacterSelect = () => {
    const [charList, setCharList] = React.useState<Hero[]>([]);
    const { connect } = useConn();

    // 캐릭터 리스트 가져오기
    const getCharacters = async () => {
        try{
            const response = await connect.client.get("/api/hero/byUser");
            if(response.data?.result === "SUCCESS"){
                const {data} = response.data;
                if(Array.isArray(data)){
                    setCharList(data);
                }
            }
        }catch(error){
            console.error(error);
        }
    }

    // 캐릭터 삭제
    const deleteCharacter = async (id: string) => {
        try{
            console.log(`${id} deleted`)
        }catch(error){
            console.error(error)
        }
    }

    React.useEffect(() => {
        getCharacters();
    }, [])

    return (
        <div>
            <h1>리스트</h1>
            <ul>
                {
                    charList.length ? 
                        charList.map(c => (
                        <li key={c.id}>
                            <p>{c.name}</p>
                            <button onClick={() => deleteCharacter(c.id)}>삭제</button>
                        </li>
                    ))
                    : 
                    <li>데이터가 없습니다.</li>
                }
            </ul>
            <Link to="/characters/create">생성</Link>
        </div>
    );
};

export default CharacterSelect;