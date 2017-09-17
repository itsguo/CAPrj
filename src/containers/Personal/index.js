import React from 'react'
import Nav from '../../components/Nav'
import * as selectTagActions from '../../actions/selectTag'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PersonComp from '../../components/Personal'
import Header from '../../components/Header'
import PwdMdf from '../../fetch/PassWord'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import { Toast} from 'antd-mobile'; 
import {hashHistory} from 'react-router'
class Personal extends React.Component {
    render() {
        return (
            <div>
            <Header user={this.props.userinfo.username} tag="我的" iconName={false}></Header>
            <PersonComp userinfo={this.props.userinfo} PWH={this.PassWordHandld.bind(this)} EXH={this.ExitHandle.bind(this)}></PersonComp>
            <Nav selectTag={this.props.selecttag.selectedTab} selectHandle={this.selectHandle.bind(this)}/>
            </div>
        )
    }
    selectHandle(newselect){
        const actions=this.props.selectTagActions
        let selecttag=this.props.selecttag
        selecttag.selectedTab=newselect
        actions.update(selecttag)
    }
    //密码修改和退出操作
    //要清除redux中store的状态
    PassWordHandld(pwd){
       let userinfo = this.props.userinfo
       userinfo.password=pwd
       const result=PwdMdf(userinfo)
       result.then(response => response.json())
       .then(data => {
         if(data.id){
           const actions = this.props.userInfoActions
           let userinfo = this.props.userinfo
           userinfo.username =null
           userinfo.name=null
           actions.update(userinfo)
        const actions2=this.props.selectTagActions
        let selecttag=this.props.selecttag
        selecttag.selectedTab="first"
        actions2.update(selecttag)
           hashHistory.push('/')
         Toast.success('修改成功，请重新登录', 2)
         }
     })
     .catch(e => console.log("Oops, error", e))
    }
    ExitHandle(){
      const actions = this.props.userInfoActions
      let userinfo = this.props.userinfo
      userinfo.username =null
      userinfo.name=null
      actions.update(userinfo)
        const actions2=this.props.selectTagActions
        let selecttag=this.props.selecttag
        selecttag.selectedTab="first"
        actions2.update(selecttag)
      hashHistory.push('/')  
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        selecttag: state.selecttag,
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectTagActions: bindActionCreators(selectTagActions, dispatch),
         userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Personal)