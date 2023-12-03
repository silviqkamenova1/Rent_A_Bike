import { createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { authServiceFactory } from '../services/authServices';
import { useLocalStorage } from "../hooks/useLocaleStorage";

//the context
export const AuthContext = createContext();
//component who wrapped and submit the provider and all functionality
export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();
    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);

            navigate('/');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { repass, ...registerData } = values;

        if (repass !== registerData.password) {
            return;
        };

        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken //double negation
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
     
    )
}

//hook which gave us easier access to the context
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};