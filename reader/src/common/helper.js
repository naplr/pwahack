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
    console.log(urlPath)
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

const NEWSAPI_BASE_ENDPOINT = 'https://newsapi.org/v1'
const NEWSAPI_API_KEY = 'aae578b2df2943f1874425ef3301f7c7'
const SORT_BY = {
    LATEST: 'latest',
    TOP: 'top'
}

export function getHeadlines(source, sortBy) {
    const params = {
        source: source,
        sortBy: sortBy,
        apiKey: NEWSAPI_API_KEY
    }

    return getRequest(`${NEWSAPI_BASE_ENDPOINT}/articles`, params)
}