import { combineReducers } from 'redux'
import userinfo from './userinfo'
import selecttag from './selecttag'
export default combineReducers({
    userinfo,
    selecttag
})