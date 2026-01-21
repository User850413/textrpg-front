import React from 'react';
import { useCharacter } from '../../../hooks/useCharacter';

/**
 *  file : MyHome.tsx
 *  name : 필드 - 집
 *  updated at : 2026-01-15
 */

const MyHome = () => {
    const {addMaterialItem} = useCharacter();

    const onClickGetItem = () => addMaterialItem("32aed76b-cf0b-4b9c-8314-b7c6ab3fe119", 1);
    return (
        <div>
            <button onClick={onClickGetItem}>테스트 아이템 얻기</button>
        </div>
    );
};

export default MyHome;