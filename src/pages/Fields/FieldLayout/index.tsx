import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FieldRenderer from '../FieldRenderer';
import { useConn } from '../../../hooks/useConn';
import { useCharacter } from '../../../hooks/useCharacter';
import type { PlaceDetailResponse } from '../../../types/place';

/**
 *  file : FieldLayout.tsx
 *  page : 필드 레이아웃
 *  updated at : 2026-01-16
 */
const FieldLayout = () => {
    const {connect} = useConn();
    const {character} = useCharacter();
    let {fieldId} = useParams();
    if(!fieldId) fieldId = "HOME"

    const [field, setField] = useState<PlaceDetailResponse>();
    
    // 갈 수 있는 지역 data불러오기
    const getReachablePlaceData = async () => {
        if(!character) return;
        try{
            const params = {placeId : character.location.id}
            const response = await connect.client.get("/api/place/detail", {params});
            if(response.data?.result === "SUCCESS"){
                const {data} : {data:PlaceDetailResponse} = response.data;
                console.log(data);
                setField(data);
            }
        }catch(error){
            console.error(error);
        }
    }

    const onClickMove = () => {}

    React.useEffect(() => {
        getReachablePlaceData();
    }, [])

    return (
        <div>
            <div>
                <p>이동</p>
                {field && field.connectedPlace.length && (<ul>
                    {field.connectedPlace.map(pc => (
                        <li key={pc.id}>
                            <button onClick={onClickMove}>{pc.name}</button>
                        </li>
                    ))}
                </ul>)}
            </div>
            <FieldRenderer fieldId={fieldId} />
        </div>
    )
};

export default FieldLayout;