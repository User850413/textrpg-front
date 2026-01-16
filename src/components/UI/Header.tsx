import React from 'react';
import { useConn } from '../../hooks/useConn';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCharacter } from '../../hooks/useCharacter';

/**
 *  file : Header.tsx
 *  page : 헤더 컴포넌트
 *  updated at : 2026-01-16
 */
const Header = () => {
    const {connect} = useConn();
    const {user} = useAuth();
    const {character, setCharacter} = useCharacter();
    const navigate = useNavigate();

    // 로그아웃
    const onClickLogout = async () => {
        try{
            const response = await connect.client.post("/api/user/logout");
            if(response.data?.result === "SUCCESS"){
                alert("로그아웃되셨습니다.");
                navigate("/login");
            }
        }catch(error){
            console.error(error);
        }
    }

    // 캐릭터 재선택
    const onClickReSelectChar = () => {
        if(!confirm("다시 선택하시겠습니까?")) return;
        setCharacter(null);
        localStorage.removeItem("selectedChar");
    }

    return (
        <div>
            <button type="button" onClick={onClickLogout}>로그아웃</button>
            <p>{user?.userName}님 환영합니다.</p>
            {character && (
                <div>
                    <span>{character.name}</span>
                    <button onClick={onClickReSelectChar}>재선택</button>
                </div>
            )}
        </div>
    );
};

export default Header;