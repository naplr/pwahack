import { SELECT_ARTICLE, REMOVE_ARTICLE } from './types'

export function selectArticle(article) {
    return {
        type: SELECT_ARTICLE,
        article: article
    }
}

export function removeArticle(article) {
    console.log(article)
    return {
        type: REMOVE_ARTICLE,
        article: article
    }
}