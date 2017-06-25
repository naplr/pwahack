import { 
    SELECT_ARTICLE, 
    REMOVE_ARTICLE, 
    INIT_ARTICLES } from './types'

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

export function initArticles(articles) {
    return {
        type: INIT_ARTICLES,
        articles: articles
    }
}