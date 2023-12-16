// import { createContext, useContext } from "react";
import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { bikeServiceFactory } from '../services/bikeService'
import { useLocalStorage } from '../hooks/useLocaleStorage';
import { authServiceFactory } from '../services/authServices';
import { AuthContext, useAuthContext } from './AuthContext';

export const BikeContext = createContext();


export const BikeProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [bikes, setBikes] = useState([]);
    const [auth, setAuth] = useLocalStorage('auth', {});
    const authService = authServiceFactory(auth.accessToken);
    const context = useAuthContext()

    const bikeService = bikeServiceFactory(context.token);


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

     const deleteBike = (bikeId) => {
        setBikes(state => state.filter(b => b._id !== bikeId))
     }

     const getBike = (bikeId) =>  {
        return bikes.find(bike => bike._id === bikeId)
     }

     const contextValues = {
        bikes,
        onCerateBikeSubmit,
        onBikeEditSubmit,
        deleteBike,
        getBike
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