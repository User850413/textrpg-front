import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./auth/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import { ConnProvider } from "./context/ConnProvider";

function App() {
    return (
        <BrowserRouter>
            <ConnProvider>
                <AuthProvider>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signIn" element={<SignIn />} />

                            <Route element={<PrivateRoute />}>
                                <Route path="/" element={<Main />}></Route>
                            </Route>
                        </Routes>
                </AuthProvider>
            </ConnProvider>
        </BrowserRouter>
    )
}

export default App
