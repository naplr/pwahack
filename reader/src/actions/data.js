import { 
    SELECT_ARTICLE, 
    REMOVE_ARTICLE,
    GET_NEW_ARTICLES,
    INIT_ARTICLES, 
    INIT_SOURCES,
    UPDATE_SOURCE } from './types'
import { getHeadlines } from '../common/helper'
import { SOURCES } from '../common/constants'

export function selectArticle(article) {
    return {
        type: SELECT_ARTICLE,
        article: article
    }
}

export function removeArticle(article) {
    return {
        type: REMOVE_ARTICLE,
        article: article
    }
}

export function getNewArticles(source) {
    const filter = SOURCES[source].filter
    console.log(source)
    console.log(filter)
    return (dispatch) => {
        getHeadlines(source, filter)
            .then(res => {
                dispatch({
                    type: GET_NEW_ARTICLES,
                    articles: res.articles
                })
            })
    }
}

export function updateSources(sources) {
    return {
        type: UPDATE_SOURCE,
        sources: sources
    }
}

export function initArticles(articles) {
    return {
        type: INIT_ARTICLES,
        articles: articles
    }
}