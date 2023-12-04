import { Navigate, Outlet } from "react-router-dom";

import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const RoutGuard = ({
    children
}) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {

        return <Navigate to='/login'/>;
    }
    return children ? children : <Outlet />
};