import { Outlet } from "react-router-dom";
import Header from "../../components/UI/Header";
import { CharacterProvider } from "../../context/CharacterProvider";

/**
 *  file : Main.tsx
 *  page : 메인 레이아웃
 *  updated at : 2026-01-16
 */
const Main = () => {
    return (
        <CharacterProvider>
            <Header />
            <Outlet />
        </CharacterProvider>
    );
};

export default Main;