import { requesterFactory } from './requester';

const baseUrl = 'http://localhost:3030/users';

export const authServiceFactory = (token) => {
    const request = requesterFactory(token);
    
    return {
         login: (data) => request.post(`${baseUrl}/login`, data),  
         register: (data) => request.post(`${baseUrl}/register`, data),       
         logout: () => request.get(`${baseUrl}/logout`)
    }
}