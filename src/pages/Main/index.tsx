import { Outlet } from "react-router-dom";
import Header from "../../components/UI/Header";
import { CharacterProvider } from "../../context/CharacterProvider";

/**
 *  file : Main.tsx
 *  page : 메인
 *  updated at : 2026-01-15
 */
const Main = () => {
    return (
        <div>
            <CharacterProvider>
                <Header />
                <Outlet />
            </CharacterProvider>
        </div>
    );
};

export default Main;