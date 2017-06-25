import _ from 'lodash'

import { 
    SELECT_ARTICLE, 
    REMOVE_ARTICLE, 
    GET_NEW_ARTICLES,
    INIT_SOURCES,
    INIT_ARTICLES,
    UPDATE_SOURCE } from '../actions/types'
import { addSelectedArticle, removeSelectedArticle } from '../common/dbclient'

const INITIAL_STATE = {
    selectedArticles: [],
    newArticles: [],
    sources: []
}

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case SELECT_ARTICLE:
            if (_.includes(state.selectedArticles, action.article)) {
                return { ...state }
            } else {
                addSelectedArticle(action.article)
                const addedList = state.selectedArticles.concat([action.article])
                return { ...state, selectedArticles: addedList }
            }
        case REMOVE_ARTICLE:
            removeSelectedArticle(action.article)
            const removedList = _.reject(state.selectedArticles, action.article)
            return { ...state, selectedArticles: removedList }
        case GET_NEW_ARTICLES:
            const articles = action.articles
            const newArticles = _.difference(action.articles, state.selectedArticles)
            return { ...state, newArticles: newArticles }
        case UPDATE_SOURCE:
            return { ...state, sources: action.sources }
        case INIT_ARTICLES:
            return { ...state, selectedArticles: action.articles }
        default:
            return state
    }
}