import { 
    SELECT_ARTICLE, 
    REMOVE_ARTICLE,
    GET_NEW_ARTICLES,
    INIT_ARTICLES, 
    INIT_SOURCES,
    SELECT_SOURCE,
    REMOVE_SOURCE } from './types'
import { getHeadlines } from '../common/helper'

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
    return (dispatch) => {
        getHeadlines('hacker-news', 'latest')
            .then(res => {
                dispatch({
                    type: GET_NEW_ARTICLES,
                    articles: res.articles
                })
            })
    }
}

export function initArticles(articles) {
    return {
        type: INIT_ARTICLES,
        articles: articles
    }
}