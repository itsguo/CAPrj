import {put} from '../put'
import {BASE_SIGN_UP_URL} from '../../constants/BaseURL'
export default function(obj){
     const keywordStr=BASE_SIGN_UP_URL+'/'+obj.id
     const result=put(keywordStr,obj)
     return result
}