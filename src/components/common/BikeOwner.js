import { Navigate, Outlet, useParams } from "react-router-dom";

//import { useBikeContext } from "../../contexts/BikeContext";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { BikeContext } from "../../contexts/BikeCntext";

export const BikeOwner = ({
    children,
}) => {
    const { bikeId } = useParams()
    const [bikes, setBikes] = useState([]);
    const getBike = (bikeId) =>  {
        return bikes.find(bike => bike._id === bikeId)
     }
    const { userId } = useContext(AuthContext)

    const currentBike = getBike(bikeId);

    if(currentBike && currentBike._ownerId !== userId){
        return <Navigate to={`/catalog/${bikeId}`}/>
    };

    return children ? children : <Outlet />
}