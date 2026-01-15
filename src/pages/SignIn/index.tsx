import React from 'react';
import Connect from '../../Communicator/Communicator';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';

/**
 *  file : SignIn.tsx
 *  name : 회원가입
 *  updated at : 2026-01-15
 */

const DEFAULT_USER_REGIST = {
    userId:"",
    userPwd:"",
    userName:"",
}
const SignIn = () => {
    const conn = new Connect;
    const {form, setValue} = useForm(DEFAULT_USER_REGIST);

    const onClickLogin = async () => {
        try{
            const response = await conn.client.post("/api/user/register", form);
            console.log(response);
        }catch(error){
            console.log(error);
        }
    };

    return (
        <div>
            <h1>회원가입 페이지</h1>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="login-id">아이디</label>
                <input type="text" id="login-id" aria-label="아이디" onChange={e => setValue("userId", e.target.value)} value={form.userId} />
                <label htmlFor="login-userName">닉네임</label>
                <input type="text" id="login-userName" area-label="닉네임" onChange={e => setValue("userName", e.target.value)} value={form.userName} />
                <label htmlFor="login-password">비밀번호</label>
                <input type="password" id="login-password" area-label="비밀번호" onChange={e => setValue("userPwd", e.target.value)}  value={form.userPwd}/>
                <button type="submit" onClick={onClickLogin}>회원가입</button>
            </form>

            <Link to="/login">로그인하러 가기</Link>
        </div>
    );
};

export default SignIn;