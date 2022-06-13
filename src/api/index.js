const url = "http://127.0.0.1:5000/events/api/";

const headers = {
    accept: 'application/json',
    'content-type': 'application/json'
};

// this should be used whenever you call a protected method 
// - something that the back end only allows to authorized users.
// you will need the state.auth.token value passing in to the component,
// and then passed to the api call from the action method

const authorizedHeaders = (token) => {
    return {
        ...headers,
        authorization: `Bearer ${token}`,
        'accept': 'application/json',
        'content-type': 'application/json'
    };
}

export const fetchAllEvents = () => {
    
    return fetch(url + 'Events').then((response) => {
        return response.json();
    });
}

export const addEvent = (event) => {
    return fetch(url + 'event',
        {
            method: 'post',
            mode: 'cors',
            headers: headers ,
            body: JSON.stringify(event)
        }).then((response) => {
            return response.json();
        });
};


export const postData = (data) => {
    return fetch(url + 'data',
        {
            method: 'post',
            mode: 'cors',
            headers: { 'Authorization': 'TOKEN' },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json();
        });
};