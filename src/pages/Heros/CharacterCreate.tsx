import React from 'react';
import { useConn } from '../../hooks/useConn';
import { useForm } from '../../hooks/useForm';
import { Link, useNavigate } from 'react-router-dom';

/**
 *  file : CharacterCreate.tsx
 *  page : 캐릭터 생성 페이지
 *  updated at : 2026-01-16
 */

const DEFAULT_CHARACTER = {
    name: ""
}

const CharacterCreate = () => {
    const {connect} = useConn();
    const {form, setValue} = useForm(DEFAULT_CHARACTER);
    const navigate = useNavigate();

    const onClickCreateCharacter = async () => {
        try{
            const response = await connect.client.post("/api/hero/create", form);
            if(response.data?.result === "SUCCESS"){
                alert("생성이 완료되었습니다.");
                navigate("/characters/select");
            }
        }catch(error){
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={e =>e.preventDefault()}>
                <label htmlFor='name'>이름</label>
                <input id="name" type="text" value={form.name} onChange={e => setValue("name", e.target.value)} />
            </form>
            <button onClick={onClickCreateCharacter}>생성</button>
            <Link to="/characters/select">선택 페이지로 돌아가기</Link>
        </div>
    );
};

export default CharacterCreate;