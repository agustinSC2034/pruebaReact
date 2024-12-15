export async function call({ uri, method = 'GET', body = undefined }) {
    const headers = {
        'auth-token': localStorage.getItem('token'),
    };

    if (!(body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(body);
    }    

    return fetch(`http://localhost:3333/api/${uri}`, {
        method,
        body,
        headers,
    })
    .then(async (response) => {
        if (!response.ok) {
            if (response.status === 401) {
                localStorage.removeItem('token');
            }
            throw await response.json();
        }
        return response.json();
    });
}
