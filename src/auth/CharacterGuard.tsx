import { Navigate, Outlet } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacter';

/**
 *  file : CharacterGuard.tsx
 *  페이지 : 캐릭터 선택/생성 보호 라우트
 *  설명 : 캐릭터가 선택되지 않았으면 선택 페이지로 리다이렉트
 *  updated at : 2026-01-16
 */
const CharacterGuard = () => {
    const { character } = useCharacter();

    if (!character) {
        return <Navigate to="/characters/select" replace />;
    }

    return <Outlet />;
};

export default CharacterGuard;
