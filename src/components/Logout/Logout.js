import {  useEffect} from "react"
import { Navigate } from "react-router-dom"
import {  useAuthContext } from "../../contexts/AuthContext";

export const Logout = () => {
    const { onLogout} = useAuthContext();

    useEffect(() => {
        onLogout()
    }, [onLogout])
    
    return <Navigate to="/" />
    
}