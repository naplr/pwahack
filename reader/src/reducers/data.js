import _ from 'lodash'

import { SELECT_ARTICLE, REMOVE_ARTICLE } from '../actions/types'

const INITIAL_STATE = {
    selectedArticles: []
}

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case SELECT_ARTICLE:
            if (_.includes(state.selectedArticles, action.article)) {
                return { ...state }
            } else {
                const addedList = state.selectedArticles.concat([action.article])
                return { ...state, selectedArticles: addedList }
            }
        case REMOVE_ARTICLE:
            const toBeRemovedArticle = action.article
            console.log(toBeRemovedArticle)
            const removedList = _.reject(state.selectedArticles, toBeRemovedArticle)
            // const removedList = _.reject(state.selectedArticles, a => {
            //     console.log(a)
            //     return a.url == toBeRemovedArticle.url
            // })
            console.log(state.selectedArticles)
            console.log(removedList)
            return { ...state, selectedArticles: removedList }
        default:
            return state
    }
}