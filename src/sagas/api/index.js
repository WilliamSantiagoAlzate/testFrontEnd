//Establish base Url
const baseURL = 'http://186.147.125.7:8080';

//Create fetch API function
export default function apiCall(url, requestOptions) {
    const URL = baseURL + url;
    return (
        fetch(URL, requestOptions)
            .then(response => response.json())
    )
};