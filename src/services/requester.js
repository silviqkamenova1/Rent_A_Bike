const requester = async(method, token, url, data) => {
    const options = {}

    if(method !== "GET"){
        options.method = method;

        if(data) {
            options.headers = {
                'content-type': 'application/json'
            };

            options.body = JSON.stringify(data);
        }
    };

    if(token){
        options.headers = {
            //add the old one if we have token
            ...options.headers,
            //add this
            'X-Authorization': token,
        }
    }

    const response = await fetch(url, options);
    console.log(response);

    if(response.status === 204){
        //no content response edge casae
        return {};
    };

    const result = await response.json();

    if (!response.ok) {

        throw result;
    }

    return result;

}


//function which creates an object which allows
//to bind the token after the method
export const requesterFactory = (token) => {
    if(!token) {
        const serializedAuth = localStorage.getItem('auth');

        if(serializedAuth) {
            const auth = JSON.parse(serializedAuth);
            token = auth.accessToken;
        }
    }

    return {
        get : requester.bind(null, 'GET', token),
        post : requester.bind(null, 'POST', token),
        put : requester.bind(null, 'PUT', token),
        patch : requester.bind(null, 'PATCH', token),
        delete : requester.bind(null, 'DELETE', token),
    }

}

