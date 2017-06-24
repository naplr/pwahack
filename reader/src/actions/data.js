import { SELECT_ARTICLE } from './types'

export function selectArticle(article) {
    return {
        type: SELECT_ARTICLE,
        article: article
    }
}
