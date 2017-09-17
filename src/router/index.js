import React from 'react'
import { Router, Route,hashHistory,IndexRoute} from 'react-router'
import Login from '../containers/Login'
import Main from '../containers/Main'
import Sign from '../containers/SignUp'
import Personal from '../containers/Personal'
import HistoryLog from '../containers/HistoryLog'
import Detail from '../containers/SignUp/detail'
class RouterMap extends React.Component {
    render() {
        return (
           <Router history={hashHistory}>
                <Route path='/' component={Login}/>
                <Route path='/Main' component={Main}>
                <IndexRoute component={Sign}/>
                <Route path='Personal' component={Personal} />
                <Route path='HistoryLog' component={HistoryLog} />
                <Route path='Detail/:id' component={Detail} />
                </Route>
            </Router>
        )
    }
}

export default RouterMap
