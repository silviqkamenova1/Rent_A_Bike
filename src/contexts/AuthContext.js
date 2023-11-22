import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';


import { authServiceFactory } from '../services/authServices';


export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
    const authService = authServiceFactory(auth.accessToken)

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
  
        }
     };

    const onLogout = async () => {
        await authService.logout()
        setAuth({})
     };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken //double negative
     };

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    )
}