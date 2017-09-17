import {get} from '../get'
import {BASE_USER_URL} from '../../constants/BaseURL'
export default function(inusername){
     const keywordStr='/'+inusername
     const result=get(BASE_USER_URL+keywordStr)
     return result
}