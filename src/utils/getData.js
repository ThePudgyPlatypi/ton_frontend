export async function getData(url = '', options = {}, state = '') {
    const response = await fetch(url, {
        method: 'GET',
        ...options  
    }).then(res => {
        if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
                res.status);
            return;
        }
    
        res.json().then(function(data) {
            if(state) {
                console.log(data);
                state(data);
            }
        });
    }).catch((error) => {
        console.log(error);
    });

    return response;
}