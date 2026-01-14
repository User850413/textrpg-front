import { useEffect, useState } from "react";
import Connect from "./Communicator/Communicator";

function App() {
  const conn = new Connect();
  const [formData, setFormData] = useState({
    id:"",
    password:""
  })

  const onClickLogin = () => {
    console.log("hi");
  };

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="login-id">아이디</label>
        <input type="text" id="login-id" aria-label="아이디" name="id" />
        <label htmlFor="login-password">비밀번호</label>
        <input type="password" id="login-password" area-label="비밀번호" name="password" />
        <button type="submit" onClick={onClickLogin}>로그인</button>
      </form>
    </>
  )
}

export default App
