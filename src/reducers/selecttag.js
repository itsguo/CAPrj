import * as actionTypes from '../constants/selectTagInfo'

const initialState = {selectedTab:'first'}

export default function selecttag (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECTTAG_UPDATE:
            return action.data
        default:
            return state
    }
}