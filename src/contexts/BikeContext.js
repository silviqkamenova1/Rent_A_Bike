import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { bikeServiceFactory } from '../services/bikeService'

export const BikeContext = createContext();

export const BikeProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [bikes, setBikes] = useState([]);
    const bikeService = bikeServiceFactory();//(auth.accessToken)

    useEffect(() => {
        bikeService.getAll()
           .then(result => {
              setBikes(result);
           });
     }, []);
  
    const onCerateBikeSubmit = async (data) => {
        const newBike = await bikeService.create(data);
  
        setBikes(state => [...state, newBike]);
  
        navigate('/catalog');
     };
  
     const onBikeEditSubmit = async (values) => {
        const result = await bikeService.edit(values._id, values);
  
        setBikes(state => state.map(x => x._id === values._id ? result : x));
  
        navigate(`/catalog/${values._id}`);
     };

     const contextValues = {
        bikes,
        onCerateBikeSubmit,
        onBikeEditSubmit,
     }

    return (
        <BikeContext.Provider value={contextValues}>
            {children}
        </BikeContext.Provider>
    )
};

export const useBikeContext = () => {
    const context = useContext(BikeContext);

    return context;
}