import { SELECT_ARTICLE } from '../actions/types'

const INITIAL_STATE = {
    selectedArticles: []
}

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case SELECT_ARTICLE:
            const a = state.selectedArticles.concat([action.article])
            console.log(a)
            return { ...state, selectedArticles: a }
        default:
            return state
    }
}