/**
 *  file : Main.tsx
 *  page : 메인
 *  updated at : 2026-01-15
 */

import { useNavigate } from "react-router-dom";
import { useConn } from "../../hooks/useConn";


const Main = () => {
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
            <button type="button" onClick={onClickLogout}>로그아웃</button>
        </div>
    );
};

export default Main;