import { Navigate, Outlet, useParams } from "react-router-dom";

import { useBikeContext } from "../../contexts/BikeContext";
import { useAuthContext } from "../../contexts/AuthContext";

export const BikeOwner = ({
    children,
}) => {
    const { bikeId } = useParams()
    const { getBike } = useBikeContext();
    const { userId } = useAuthContext()

    const currentBike = getBike(bikeId);

    if(currentBike && currentBike._ownerId !== userId){
        return <Navigate to={`/catalog/${bikeId}`}/>
    };

    return children ? children : <Outlet />
}