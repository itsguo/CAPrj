// import React from 'react'
// // import 'react-fastclick'  // 这个需要放到react下方才行
// import { render } from 'react-dom'
// import {Button} from 'antd-mobile'
// const rootEl = document.getElementById('app');


// render(
//      <Button type="primary">sss</Button>,
//   rootEl
// )

 import React from 'react'
 import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './reducers';
import RouteMap from './router/index'
// 创建 Redux 的 store 对象
const store = createStore(rootReducer);



render(
    <Provider store={store}>
        <RouteMap/>
    </Provider>,
    document.getElementById('root')
)
