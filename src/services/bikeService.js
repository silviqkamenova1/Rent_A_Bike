import {requesterFactory} from './requester'

const baseUrl = 'http://localhost:3030/data/bikes';

export const bikeServiceFactory = (token) => {
    const request = requesterFactory(token);

    const getAll = async () => {
       const result = await request.get(baseUrl);
       const bikes = Object.values(result);
    
       return bikes;
    };
    
     const getOne = async (bikeId) => {
        const result = await request.get(`${baseUrl}/${bikeId}`);
    
        return result;
    };
    
    const create = async (bikeData) => {
       const result = await request.post(baseUrl, bikeData);
       return result;
    };

    const edit = (bikeId, data) => {
        const result = request.put(`${baseUrl}/${bikeId}`, data);
        return result;
    };

    const deleteBike = (bikeId) => {
        const result = request.delete(`${baseUrl}/${bikeId}`);
        return result;
    };


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteBike,
    }
}
