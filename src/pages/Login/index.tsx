import React from 'react';
import Connect from '../../Communicator/Communicator';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import AuthForm from '../../components/form/AuthForm';

/**
 *  file : Login.tsx
 *  page : 로그인
 *  updated at : 2026-01-15
 */

const DEFAULT_USER_LOGIN = {
    userId:"",
    userPwd:""
}
const Login = () => {
    const conn = new Connect;
    const {form, setValue} = useForm(DEFAULT_USER_LOGIN);
    const { checkAuth } = useAuth();

    // 로그인 버튼 클릭 시
    const onClickLogin = async () => {
        try{
            const response = await conn.client.post("/api/user/login", form);
            if(response.data?.result === "SUCCESS"){
                checkAuth();
            }
        }catch(error){
            console.error(error);
        }
    };

    return (
        <div>
            <AuthForm>
                <h1>로그인 페이지</h1>
                    <label htmlFor="login-id">아이디</label>
                    <input type="text" id="login-id" aria-label="아이디" onChange={e => setValue("userId", e.target.value)} value={form.userId} />
                    <label htmlFor="login-password">비밀번호</label>
                    <input type="password" id="login-password" area-label="비밀번호" onChange={e => setValue("userPwd", e.target.value)}  value={form.userPwd}/>
                    <button type="submit" onClick={onClickLogin}>로그인</button>

            </AuthForm>
            <Link to="/signIn">회원가입하러 가기</Link>
        </div>
    );
};

export default Login;