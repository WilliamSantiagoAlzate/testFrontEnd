//Establish base Url
const baseURL = 'http://staging.bingored.co:8080';

//Create fetch API function
export default function apiCall(url, requestOptions) {
    const URL = baseURL + url;
    return (
        fetch(URL, requestOptions)
            .then(response => response.json())
    )
};