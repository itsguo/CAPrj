import React from 'react'
import { Accordion, List } from 'antd-mobile';
import HistoryItem from './Items'
     var _today=[]
     var _yestoday=[]
     var _other=[]
class HistoryLog extends React.Component {
    analyseDate(){
       this.props.data.map((item, index) => {
            if(this.resloveDate(item.time)==="today"){
               _today.push(item)
            }else if(this.resloveDate(item.time)==="yestoday"){
                _yestoday.push(item)
            }else {
                _other.push(item)
            }
            })
     }
    render() {
        _today=[]
        _yestoday=[]
        _other=[]
        this.analyseDate()
        return (
    <div style={{  marginBottom: 10 }}>
        <Accordion defaultActiveKey="0" className="my-accordion">
          <Accordion.Panel header="今天">
            <List className="my-list">
               { _today.map((item, index) => {
                    return <HistoryItem key={index} data={item}/>
                })}
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="昨日" className="pad">
           <List className="my-list">
               { _yestoday.map((item, index) => {
                    return <HistoryItem key={index} data={item}/>
                })}
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="更早" className="pad">
           <List className="my-list">
               { _other.map((item, index) => {
                    return <HistoryItem key={index} data={item}/>
                })}
            </List>
          </Accordion.Panel>
        </Accordion>
      </div>
        )
    }
    resloveDate(time){
        const now =new Date()
        const old =new Date(time)
        if(now.getFullYear()===old.getFullYear()){
           if(now.getMonth()===old.getMonth()){
              if(now.getDate()===old.getDate()){
                  return "today"
              }else if(now.getDate()===(old.getDate()+1)){
                  return "yestoday"
              }else{
                  return "other"
              }
           }else{
               return "other"
           }
        }else{
            return "other"
        }
    }
}

export default HistoryLog