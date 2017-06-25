import qs from 'qs'

export function getRequest(urlPath, params={}) {
    const queryString = qs.stringify(params)
    return new Promise((resolve, reject) => {
        fetch(`${urlPath}?${queryString}`, { 
            method: 'GET'
        })
            .then(res => {
                resolve(res.json())
            })
    })
}

export function postRequest(urlPath, data) {
    console.log(data)
    return new Promise((resolve, reject) => {
        fetch(`${urlPath}`, { 
            method: 'POST',
            headers: {
                'Accet': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                resolve(res.json())
            })
            .catch(r => {
                console.log(r.message)
            })
    })
}