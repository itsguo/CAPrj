import React from 'react'
import { List } from 'antd-mobile'
import './style.css'
const Item = List.Item
const Brief = Item.Brief
class HistoryItems extends React.Component {
    render() {
        return (
           <div className="historydiv"> 
        <Item className="historyitem"
              extra={this.resolveTime(this.props.data.time)} 
              align="top" 
              thumb={<img src={require('./../../../static/'+this.props.data.imgname)} style={{width:'50px',height:'50px'}} alt=""/>}
              multipleLine
        >
         {this.props.data.coursename}<Brief>{this.props.data.desc}</Brief>
        </Item>
          </div>
        )
    }
    resolveTime(time){
      const date=new Date(time)
      return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()+'-'+(date.getHours())+':'+date.getMinutes()+':'+date.getSeconds()
    }

}

export default HistoryItems