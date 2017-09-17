import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 
import {hashHistory} from 'react-router'
import getUserSignInfo from './../../fetch/SignUp/index'
import modifyDate from './../../fetch/SignUp/signup'
class Main extends React.Component {
    render() {
    const { children } =this.props;
    return children 
    }
    componentWillMount() {
        // 判断是否已经登录
        this.doCheck()
    }
    doCheck() {
        const userinfo = this.props.userinfo
        if (!userinfo.username) {
            // 未登录，则跳转到登录
             hashHistory.push('/')
        }else{
             //已登录，进行日期判断
         const userinfo = this.props.userinfo
         const result =getUserSignInfo(userinfo.username)
         result.then(response => response.json())
         .then(data => {
             var i=0
             data.map((item, index) => {
                  if(!this.judgeDate(item.time)&&item.status!==0){
                        item.status=0
                        modifyDate(item)
                      console.log("状态更新")
                      i++
                  }
                }) 
            if(i!==0){
             hashHistory.push('/')
             hashHistory.push('/Main')
            }
          })
     .catch(e => console.log("Oops, error", e))  
         }
    }
    judgeDate(date){
        const now=new Date()
        const old=new Date(date)
        if(now.getFullYear()!==old.getFullYear()){return false}
        else if(now.getMonth()!==old.getMonth()){return false}
        else if(now.getDate()!==old.getDate()){return false}
        else {return true}
    }


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
)(Main)