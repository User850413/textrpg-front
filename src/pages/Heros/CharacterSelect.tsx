import React from 'react';
import { useConn } from '../../hooks/useConn';
import type { HeroDetailResponse, HeroGeneralResponse } from '../../types/heroes';
import { Link, useNavigate } from 'react-router-dom';
import { useCharacter } from '../../hooks/useCharacter';

/**
 *  file : CharacterSelect.tsx
 *  page : 캐릭터 선택 페이지
 *  updated at : 2026-01-16
 */
const CharacterSelect = () => {
    const [charList, setCharList] = React.useState<HeroGeneralResponse[]>([]);
    const { connect } = useConn();
    const { setCharacter } = useCharacter();
    const navigate = useNavigate();

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
        if(!confirm("정말로 삭제하시겠습니까?")) return;
        try{
            const response = await connect.client.delete(`/api/hero/delete/${id}`);
            if(response.data?.result === "SUCCESS"){
                alert("삭제 성공");
                getCharacters();
            }
        }catch(error){
            console.error(error)
        }
    }

    // 캐릭터 선택
    const onClickSelectCharacter = async (c: HeroGeneralResponse) => {
        try{
            const response = await connect.client.get(`/api/hero/${c.id}/detail`);
            if(response.data?.result === "SUCCESS"){
                const {data}: {data:HeroDetailResponse} = response.data;
                setCharacter(data);
                localStorage.setItem("selectedChar", JSON.stringify(data));
                navigate(`/field/${data.location.placeId}`);
            }else{
                console.log(response);
            }
        }catch(error){
            console.error(error);
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
                            <button onClick={() => onClickSelectCharacter(c)}><p>{c.name}</p></button>
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