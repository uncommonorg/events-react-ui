const url = process.env.REACT_APP_API_URL;

const headers = {
    accept: 'application/json',
    'content-type': 'application/json'
};

export const fetchAllEvents = () => {
    return fetch(url + 'events').then((response) => {
        return response.json();
    });
}

export const addEvent = (event) => {
    return fetch(url + 'event',
        {
            method: 'post',
            mode: 'cors',
            headers: headers,
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










