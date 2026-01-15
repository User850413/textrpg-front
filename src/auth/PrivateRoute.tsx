import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
    const {user} = useAuth();

    if(user == null || !user.userId) {
        return <Navigate to="/login" replace />
    }else{
        return (
            <>
                <Outlet />
            </>
        )
    }
};

export default PrivateRoute;