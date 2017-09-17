import React from 'react'
import LoginComponents from '../../components/Login'
import checkUser from '../../fetch/Login'
import {Toast} from 'antd-mobile'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 
import {hashHistory} from 'react-router'
class Login extends React.Component {
    render() {
        return (
           <LoginComponents loginHandle={this.loginHandle.bind(this)}/>
        )
    }
    loginHandle(username,password){
     const result =checkUser(username)
     result.then(response => response.json())
     .then(data => {
         if(data.password===password){
           const actions = this.props.userInfoActions
           let userinfo = this.props.userinfo
           userinfo.username = username
           userinfo.name=data.name
           actions.update(userinfo)
           Toast.success('登录成功!!!', 1)
           hashHistory.push('/Main')
         }else{
             Toast.fail('登录失败，请检查 !!!', 2);
         }

     })
     .catch(e => console.log("Oops, error", e))
    }

// componentWillReceiveProps(nextProps) {
//     this.setState({
//         children: nextProps.children
//     });
// }

}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)