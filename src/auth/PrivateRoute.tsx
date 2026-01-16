import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
    const {user, loading} = useAuth();

    if(loading){
        return <div><p>잠시만 기다려주세요...</p></div>
    }

    if(user == null || !user.userId) {
        return <Navigate to="/login" replace />
    }else{
        return (<Outlet />)
    }
};

export default PrivateRoute;