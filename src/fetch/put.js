import 'whatwg-fetch'
import 'es6-promise'

export function put(url, paramsObj) {
    var result = fetch(url, {
        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(paramsObj)
    });
    return result;
}