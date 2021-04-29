export default async function apiCall({url, method = "get", body, headers,}) {
    try {
        const response = fetch(url, {method, body, headers});

        return (await response).json();
    } catch (error) {
        Promise.reject(error);
    }
}
