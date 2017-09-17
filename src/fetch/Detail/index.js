import {get} from '../get'
import {BASE_SIGN_UP_URL} from '../../constants/BaseURL'
export default function(id){
     const keywordStr='?course.id='+id
     const result=get(BASE_SIGN_UP_URL+keywordStr)
     return result
}