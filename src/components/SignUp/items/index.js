import React from 'react'
import { Card, WingBlank,Button,Modal} from 'antd-mobile';
import {hashHistory} from 'react-router'
import './style.css'
const prompt = Modal.prompt 
var modify=''
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
         const now=new Date()
        const str = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+" "
        const time=new Date(str+this.props.data.course.begintime)
        const difftime=this.getMinDiff(now.getTime()-time.getTime())
        var disa=false
        var text="签到"
        var method=this.clickHandle1
        if(this.props.data.status===0&&difftime>60){
            disa=true
            text="缺勤"
            this.clickHandle3()
        }else if(this.props.data.status===0&&difftime<-15){
            disa=true
            text="时候未到"
        }else if(this.props.data.status===0&&difftime>0&&difftime<60){
            disa=false
            text="签到(迟到)"
            method=this.clickHandle2
        }else if(this.props.data.status===1){
             disa=true
            text="已签到"
        }else if(this.props.data.status===2){
             disa=true
            text="已签到(迟到)"
        }else if(this.props.data.status===3){
             disa=true
            text="缺勤"
        }
        this.state={
          imgurl:this.props.data.course.imgname,
          address:"上课地点:"+this.props.data.course.address,
          _disa:disa,
          _text:text,
          _method:method,
          _time:str+this.props.data.course.begintime
        }
    }
    render() {
     modify=this.props.signupHandle
        return (
        <div className="itemcontainer">
      <WingBlank size="lg">
     <Card className="sss">
       <Card.Header
        title="课程名称:"
        thumb={<img src={require('./../../../static/'+this.state.imgurl)} style={{width:'100px',height:'100px'}} alt=""/>  }
        extra={<span>{this.props.data.course.name}</span>}
      />
      <Card.Body>
        <div>
        <Button onClick={this.state._method.bind(this)} type="primary" disabled={this.state._disa} inline style={{ marginRight: '0.08rem' }}>{this.state._text}</Button>
        <Button onClick={this.toDetailPage.bind(this)} type="ghost" inline size="small" style={{ marginRight: '0px' }}>查看详情</Button>
       </div>
      </Card.Body>
      <Card.Footer content={this.state.address} extra={"上课时间："+this.state._time} />
     </Card>   
        </WingBlank>
        </div>
        )
       
    }
    toDetailPage(){
        hashHistory.push('/Main/Detail/'+this.props.data.course.id)
    }
    getMinDiff(date) { 
    var leave1=date%(24*3600*1000)    //计算天数后剩余的毫秒数  
    var hours=Math.floor(leave1/(3600*1000))  
    //计算相差分钟数  
    var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数  
    var minutes=Math.floor(leave2/(60*1000))+hours*60
    if(minutes<0)
    return minutes+60
    else 
    return minutes
     }
    clickHandle1(){
       var newobj=this.props.data
       newobj.status=1
       newobj.time=new Date()
       prompt('请输入', '上课教师提供的签到码', [
      { text: '取消' },
      { text: '签到', 
        onPress: value =>(this.hander1(newobj))
       }
      ], 'plain-text', '100')
    }
     hander1(newobj){
           modify(newobj,1)
           this.setState({
            _disa:true,
            _text:"已签到"
        })
     }
      clickHandle2(){
       var newobj=this.props.data
       newobj.status=2
       newobj.time=new Date()
       prompt('请输入', '上课教师提供的签到码', [
      { text: '取消' },
      { text: '签到', 
       onPress: value =>(this.hander2(newobj)) 
      } ], 'plain-text', '100')
    }
     hander2(newobj){
           modify(newobj,1)
           this.setState({
            _disa:true,
            _text:"已签到(迟到)"
        })
     }
      clickHandle3(){
       const modify=this.props.signupHandle
       var newobj=this.props.data
       newobj.status=3
       newobj.time=new Date()
       modify(newobj,0)
    }
    
}

export default Item