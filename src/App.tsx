import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./auth/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import { ConnProvider } from "./context/ConnProvider";
import CharacterSelect from "./pages/Heros/CharacterSelect";
import CharacterCreate from "./pages/Heros/CharacterCreate";
import FieldLayout from "./pages/Fields/FieldLayout";

function App() {
    return (
        <BrowserRouter>
            <ConnProvider>
                <AuthProvider>
                        <Routes>
                            {/* 공개 페이지 */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/signIn" element={<SignIn />} />

                            {/* 로그인 인증 후 */}
                            <Route element={<PrivateRoute />}>
                                <Route path="/" element={<Main />}>
                                    {/* 캐릭터 영역 */}
                                    <Route path="/characters">
                                        <Route path="select" element={<CharacterSelect />} />
                                        <Route path="create" element={<CharacterCreate />} />
                                    </Route>

                                    {/* 필드 영역 */}
                                    <Route path="/field/:fieldId" element={<FieldLayout />} />
                                </Route>
                            </Route>
                        </Routes>
                </AuthProvider>
            </ConnProvider>
        </BrowserRouter>
    )
}

export default App
