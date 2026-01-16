import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./auth/PrivateRoute";
import CharacterGuard from "./auth/CharacterGuard";
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

                        {/* 인증 필요 페이지 */}
                        <Route element={<PrivateRoute />}>
                            <Route path="/" element={<Main />}>
                                {/* 캐릭터 선택 (항상 가능) */}
                                <Route path="characters/select" element={<CharacterSelect />} />
                                <Route path="characters/create" element={<CharacterCreate />} />

                                {/* 캐릭터 필요한 페이지 */}
                                <Route element={<CharacterGuard />}>
                                    <Route path="field/:fieldId" element={<FieldLayout />} />
                                </Route>

                                {/* 기본 경로 */}
                                <Route index element={<Navigate to="characters/select" replace />} />
                            </Route>
                        </Route>
                    </Routes>
                </AuthProvider>
            </ConnProvider>
        </BrowserRouter>
    )
}

export default App
