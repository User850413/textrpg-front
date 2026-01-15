import React, { useContext } from 'react';
import { useConn } from '../hooks/useConn';
import { useNavigate } from 'react-router-dom';

interface AuthProviderType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    checkAuth : any;
    loading: any;
}

export const AuthContext = React.createContext<AuthProviderType | null>(null);

type User = {
    userId: String;
    userName: String;
}
export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const {connect} = useConn();

    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const navigate = useNavigate();

    const checkAuth = async () => {
        console.log("checkauth now");
        try{
            const response = await connect.client.get("/api/user/me");
            if(response.data?.result === "SUCCESS"){
                const {data} = response.data;
                setUser(data);
                navigate("/");
            }else{
                console.log(response.data);
                navigate("/login");
            }
        }catch(error){
            console.error(error);
            navigate("/login");
        }finally{
            setLoading(false);
        }
    }

    React.useEffect(() => {
        checkAuth();
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, checkAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;