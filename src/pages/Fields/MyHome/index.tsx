import React from 'react';
import { useCharacter } from '../../../hooks/useCharacter';

/**
 *  file : MyHome.tsx
 *  name : 필드 - 집
 *  updated at : 2026-01-15
 */

const MyHome = () => {
    const {addItem} = useCharacter();

    const onClickGetItem = () => addItem("b6becc3a-34d9-4205-9590-a0a12bac2205", 1);
    return (
        <div>
            <button onClick={onClickGetItem}>테스트 아이템 얻기</button>
        </div>
    );
};

export default MyHome;