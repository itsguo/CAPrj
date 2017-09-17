import React from 'react'
import { List } from 'antd-mobile';
import './style.css'
const Item = List.Item
const Brief = Item.Brief
class SignLog extends React.Component {
     render() {
        if(this.props.data.status===0){return (<div></div> ) }  
        else if(this.props.data.status===1){ return (
         <div className="mylist">
           <List className="delay">
        <Item multipleLine extra={this.resolveTime(this.props.data.time)}>
          学号:{this.props.data.userid} <Brief>已签到</Brief>
        </Item>
       </List>
         </div>
        )}
        else if(this.props.data.status===2){
         return (
         <div  className="mylist">
           <List className="delay">
        <Item multipleLine extra={this.resolveTime(this.props.data.time)}>
          学号:{this.props.data.userid} <Brief>迟到</Brief>
        </Item>
       </List>
         </div>
        )   
        }else {
         return (
         <div>
           <List>
        <Item multipleLine extra={"缺勤"}>
          学号:{this.props.data.userid}
        </Item>
       </List>
         </div>
        )    
        }

    }
    resolveTime(time){
      const date=new Date(time)
      console.log(date)
      return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()+'-'+(date.getHours())+':'+date.getMinutes()+':'+date.getSeconds()
    }

}

export default SignLog