import {post} from '../post'
import {BASE_HISTORY_LOG} from '../../constants/BaseURL'
export default function(obj){
     const result=post(BASE_HISTORY_LOG,obj)
     return result
}