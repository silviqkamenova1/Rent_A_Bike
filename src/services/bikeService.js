import * as request from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/bikes';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const bikes = Object.values(result);

    return bikes;
};

// export const getOne = async (gameId) => {
//     const result = await request.get(`${baseUrl}/${gameId}`);
//     console.log(result);

//     return result;
// };

export const create = async (bikeData) => {
    const result = await request.post(baseUrl, bikeData);
    console.log(result);
    return result;
};

// export const addComment = async (gameId, data) => {
//     const result = await request.post(`${baseUrl}/${gameId}/comments`, data);

//     return result;
// }
