import { getRequest } from '../actions'

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