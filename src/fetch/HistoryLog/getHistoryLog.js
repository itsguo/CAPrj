import {get} from '../get'
import {BASE_HISTORY_LOG} from '../../constants/BaseURL'
export default function(inusername){
     const keywordStr='?userid='+inusername
     const result=get(BASE_HISTORY_LOG+keywordStr)
     return result
}