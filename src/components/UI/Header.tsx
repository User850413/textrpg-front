import React from 'react';
import { useConn } from '../../hooks/useConn';
import { useNavigate } from 'react-router-dom';

/**
 *  file : Header.tsx
 *  page : 헤더 컴포넌트
 *  updated at : 2026-01-16
 */
const Header = () => {
    const {connect} = useConn();
    const navigate = useNavigate();

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

    return (
        <div>
            <section>
                <button type="button" onClick={onClickLogout}>로그아웃</button>
            </section>
        </div>
    );
};

export default Header;