import React from 'react'
import Nav from '../../components/Nav'
import * as selectTagActions from '../../actions/selectTag'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SignUpComponent from '../../components/SignUp'
import loaddata from '../../fetch/SignUp'
import PutNew from '../../fetch/SignUp/signup'
import { Toast } from 'antd-mobile';
import Header from '../../components/Header'
import Log from '../../fetch/HistoryLog/postHistoryLog'
import './style.css'
class SignUp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
           data:[]
        }
    }
    componentDidMount(){
       const userid=this.props.userinfo.username
       this.loadsigndata(userid)
    }
    loadsigndata(userid){
        const result=loaddata(userid)
       result.then(response => response.json())
       .then(json => {
        this.setState({
           data:json
        })
     })
     .catch(e => console.log("Oops, error", e))
    }

    selectHandle(newselect){
        const actions=this.props.selectTagActions
        let selecttag=this.props.selecttag
        selecttag.selectedTab=newselect
        actions.update(selecttag)
    }
    signupHandle(obj,status){
       const result=PutNew(obj)
       result.then(response => response.json())
       .then(data => {
         if(data.id){
            const log={}
            log.userid=data.userid
            log.coursename=data.course.name
            log.time=data.time
            log.desc=this.analyseLogText(data.status)
            log.imgname=data.course.imgname
            Log(log)
           if(status){ Toast.success('签到成功', 1)}
         }
     })
     .catch(e => console.log("Oops, error", e))
    }
    analyseLogText(status){
        if(status===1){
            return "正常签到"
        }else if(status===2){
            return "迟到"
        }else {
            return "缺勤"
        }
    }


   render() {
        return (
        <div className="ss">
           <div className="header"><Header user={this.props.userinfo.username} tag="签到" iconName={false}></Header></div> 
           <div className="content"><SignUpComponent data={this.state.data} signupHandle={this.signupHandle.bind(this)}></SignUpComponent></div>
           <div><Nav selectTag={this.props.selecttag.selectedTab} selectHandle={this.selectHandle.bind(this)}/></div>
        </div>
        )
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
        selectTagActions: bindActionCreators(selectTagActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)