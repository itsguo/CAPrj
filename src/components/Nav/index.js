import React from 'react'
import { TabBar } from 'antd-mobile';
import {hashHistory} from 'react-router'
import './style.css'
class Nav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          selectedTab: this.props.selectTag
    };
    }
    render() {
        return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
      {/*签到Page  */}
        <TabBar.Item
          title="签到"
          key="签到"
          icon={<div className="signdiv1"/>}
          selectedIcon={<div className="signdiv2"/>}
          selected={this.state.selectedTab === 'first'}
          onPress={() => {
             this.props.selectHandle("first")
             hashHistory.push('/Main')
             console.log("1")
          }}
          data-seed="logId"
        >
        </TabBar.Item>
           {/*历史记录Page  */}
        <TabBar.Item
          icon={<div className="historydiv1"/>}
          selectedIcon={<div className="historydiv2"/>}
          title="记录"
          key="记录"
          selected={this.state.selectedTab === 'second'}
          onPress={() => {
           this.props.selectHandle("second")
             hashHistory.push('/Main/HistoryLog')
                console.log("2")
          }}
          data-seed="logId1"
        >
        </TabBar.Item>
       {/*个人中心Page  */}
        <TabBar.Item
          icon={<div className="persondiv1"/>}
          selectedIcon={<div className="persondiv2"/>}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'third'}
          onPress={() => {
          this.props.selectHandle("third")
            hashHistory.push('Main/Personal')
               console.log("3")
          }}
        >
        </TabBar.Item>

      </TabBar>
        )
    }
}

export default Nav