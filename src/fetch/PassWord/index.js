import {put} from '../put'
import {BASE_USER_URL} from '../../constants/BaseURL'
export default function(obj){
     const keywordStr=BASE_USER_URL+'/'+obj.username
     const result=put(keywordStr,obj)
     return result
}