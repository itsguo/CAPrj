import * as actionTypes from '../constants/selectTagInfo'

export function update(data) {
    return {
        type: actionTypes.SELECTTAG_UPDATE,
        data
    }
}