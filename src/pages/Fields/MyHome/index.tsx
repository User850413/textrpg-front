import React from 'react';
import { useConn } from '../../../hooks/useConn';
import { useCharacter } from '../../../hooks/useCharacter';

/**
 *  file : MyHome.tsx
 *  name : 필드 - 집
 *  updated at : 2026-01-15
 */

const MyHome = () => {
    const {connect} = useConn();
    const {character} = useCharacter();

    const onClickGetItem = async () => {
        try{
            const heroId = character?.id;

            const param = {
                heroId,
                itemId:"0d7ee8bf-032f-40fe-8437-93b9168d1bf9",
                count:1
            }
            const response = await connect.client.post("/api/heroItem/getItem", param);
            console.log(response);
        }catch(error){
            console.error(error);
        }
    }

    return (
        <div>
            <button onClick={onClickGetItem}>테스트 아이템 얻기</button>
        </div>
    );
};

export default MyHome;