import React from 'react'
import { Tabs, WhiteSpace, Badge,List} from 'antd-mobile'
import SignLogItem from './SignLogItem'
const TabPane = Tabs.TabPane
const Item = List.Item
var today=[]
class Detail extends React.Component {
callback(key) {
  console.log('onChange', key);
}
handleTabClick(key) {
  console.log('onTabClick', key);
}
    render() {
        today=[]
        this.getTodayMSG()
        return (
      <div>
    <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)} onTabClick={this.handleTabClick.bind(this)}>
      <TabPane tab="课程详情" key="1">
        <div>
      <List>
        <Item extra={this.props.coursemsg.id}>课程编号</Item>
        <Item extra={this.props.coursemsg.name}>课程名称</Item>
        <Item extra={this.props.coursemsg.desc}>课程描述</Item>
        <Item extra={this.props.coursemsg.address}>上课地点</Item>
        <Item extra={this.props.coursemsg.year}>课程年份</Item>
        <Item extra={this.props.coursemsg.begintime}>上课时间</Item>
      </List>
        </div>
      </TabPane>
      <TabPane tab={<Badge text={'今日('+this.todaySiupMSG()+')'}>今日记录</Badge>} key="2">
        <div>
             {today.map((item, index) => {
                    return <SignLogItem key={index} data={item}/>
             })}
        </div>
      </TabPane>
    </Tabs>
    <WhiteSpace />
  </div>
        )
    }
    getTodayMSG(){
        this.props.data.map((item, index) => {
              if(this.analyseDate(item.time)){
                today.push(item)
              }
         })
    }
    analyseDate(time){
        const now =new Date()
        const old =new Date(time)
        if(now.getFullYear()===old.getFullYear()){
           if(now.getMonth()===old.getMonth()){
              if(now.getDate()===old.getDate()){
                return true
              }else{
                return false
              }
           }else{
             return false
           }
        }else{
          return false
        }
    }

    todaySiupMSG(){
        var i=0  
       today.map((item, index) => {      
        if(item.status!==0){i++}
        })
      return i
    }
}

export default Detail