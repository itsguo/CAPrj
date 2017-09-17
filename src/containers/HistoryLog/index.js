import React from 'react'
import Nav from '../../components/Nav'
import * as selectTagActions from '../../actions/selectTag'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import HistoryComponent from './../../components/HistoryLog'
import getHistoryLog from './../../fetch/HistoryLog/getHistoryLog'
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <div>
             <Header user={this.props.userinfo.username} tag="个人记录" iconName={false}></Header>
             <HistoryComponent data={this.state.data}></HistoryComponent>
            <Nav selectTag={this.props.selecttag.selectedTab} selectHandle={this.selectHandle.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
     const userinfo = this.props.userinfo
     const result =getHistoryLog(userinfo.username)
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
)(Search)