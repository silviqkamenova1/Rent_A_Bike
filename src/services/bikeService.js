import {requestFactory} from './requester'

const baseUrl = 'http://localhost:3030/data/bikes';

export const bikeServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
       const result = await request.get(baseUrl);
       const bikes = Object.values(result);
    
       return bikes;
    };
    
     const getOne = async (bikeId) => {
        const result = await request.get(`${baseUrl}/${bikeId}`);
        console.log(result);
    
        return result;
    };
    
    const create = async (bikeData) => {
       const result = await request.post(baseUrl, bikeData);
       console.log(result);
       return result;
    };
    
    //  const addComment = async (gameId, data) => {
    //     const result = await request.post(`${baseUrl}/${gameId}/comments`, data);
    
    //     return result;
    // }
    return {
        getAll,
        getOne,
        create
    }
}
