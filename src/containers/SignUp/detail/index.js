import React from 'react'
import Header from './../../../components/Header'
import * as selectTagActions from '../../../actions/selectTag'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {hashHistory} from 'react-router'
import DetailComponent from './../../../components/Detail'
import getDetailMsg from './../../../fetch/Detail'
class Detail extends React.Component {
     constructor(props, context) {
        super(props, context);
        this.state={
            data:[],
            coursemsg:''
        }
    }   
    returnMain(){
      hashHistory.push('/Main')
    }
   componentDidMount() {
        // 获取该课程签到信息
        this.getCourseMsg(this.props.params.id)

    }
    getCourseMsg(id){
       const result =getDetailMsg(id)
     result.then(response => response.json())
     .then(json => {
         this.setState({
             data:json,
             coursemsg:json[0].course
         })
     })
     .catch(e => console.log("Oops, error", e))
    }
    render() {
        return (
           <div>
               <Header iconName="left" user={this.props.userinfo.username} leftClick={this.returnMain.bind(this)}/>
               <DetailComponent data={this.state.data} coursemsg={this.state.coursemsg}></DetailComponent>
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
)(Detail)